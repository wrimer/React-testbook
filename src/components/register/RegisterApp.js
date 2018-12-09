import React from 'react'
import steps from "../../data/steps";
import cities from "../../data/cities";
import errors from "../../data/errors";
import Steps from "./Steps"
import Navigation from "./Navigation"
import BasicRegister from "./BasicRegister";
import ContactsRegister from "./ContactsRegister";
import AvatarRegister from "./AvatarRegister";
import FinishRegister from "./FinishRegister";

export default class RegisterApp extends React.Component {
    constructor() {
        super();

        this.state = {
            values: {
                firstName: '',
                lastName: '',
                password: '',
                repeatPassword: '',
                gender: 'male',
                mail: '',
                phone: '',
                country: 1,
                city: 1,
                avatar: ''
            },
            activeStep: 0,
            steps: steps,
            errors: errors
        }
    }

    onInputChange = event => {
        let {values, errors} = this.state;
        values[event.target.name] = event.target.value;
        errors[event.target.name] = false;
        if (event.target.name === 'country') {
            values.city = this.getFirstCity(values.country)
        }
        this.setState({
            values: values,
            errors: errors
        })
    };

    onFileInputChange = event => {
        let {values, errors} = this.state;
        errors[event.target.name] = false;
        const fileReader = new FileReader();
        fileReader.onload = event => {
            values.avatar = event.target.result;
            this.setState({
                values: values,
                errors: errors
            })
        };
        fileReader.readAsDataURL(event.target.files[0])
    };

    getFirstCity(countryId) {
        let firstCity = '';
        for (const key in cities) {
            if (cities[key].country === +countryId) {
                firstCity = +key;
                break;
            }
        }
        return firstCity;
    }

    validateData = () => {
        let {activeStep, values} = this.state;
        let errors = {};
        switch (activeStep) {
            case 0: {
                if (values.firstName.length <= 5) {
                    errors.firstName = "firstName must be 6 characters or more"
                }
                if (values.lastName.length <= 5) {
                    errors.lastName = "lastName must be 6 characters or more"
                }

                if (values.password.length <= 5) {
                    errors.password = "password must be 6 characters or more"
                }
                if (values.repeatPassword !== values.password) {
                    errors.repeatPassword = "passwords doesnt match"
                }

                if (Object.keys(errors).length) {
                    this.setState({
                        errors: errors
                    });
                } else {
                    this.setState({
                        errors: {}
                    });
                    this.goNext();
                }
                break;
            }
            case 1: {
                const phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                const mailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!mailReg.test(values.mail)) {
                    errors.mail = "imvalid email"
                }

                if (!phoneReg.test(values.phone)) {
                    errors.phone = "invalid phone"
                }

                if (!values.country) {
                    errors.country = "choose country please"
                }
                if (!values.city) {
                    errors.city = "choose city please"
                }
                if (Object.keys(errors).length) {
                    this.setState({
                        errors: errors
                    });
                } else {
                    this.setState({
                        errors: {}
                    });
                    this.goNext();
                }
                break;
            }
            case 2: {
                if (!values.avatar) {
                    errors.avatar = "select avatar please"
                }
                if (Object.keys(errors).length) {
                    this.setState({
                        errors: errors
                    });
                } else {
                    this.setState({
                        errors: {}
                    });
                    this.goNext();
                }
                break;
            }
            default: {
                break;
            }
        }
    };

    goNext = () => {
        let {steps, activeStep} = this.state;
        if (activeStep + 1 < steps.length) {
            steps[activeStep].isActive = false;
            steps[activeStep].isValid = true;
            steps[activeStep + 1].isActive = true;
            this.setState({
                activeStep: activeStep + 1,
                steps: steps
            })
        }
    };

    goPrev = () => {
        let {steps, activeStep} = this.state;
        if (activeStep - 1 >= 0) {
            steps[activeStep].isActive = false;
            steps[activeStep - 1].isActive = true;
            this.setState({
                activeStep: activeStep - 1,
                steps: steps
            })
        }
    };

    resetData = () => {
        this.setState({
            values: {
                firstName: '',
                lastName: '',
                password: '',
                repeatPassword: '',
                gender: 'male',
                mail: '',
                phone: '',
                country: 1,
                city: 1,
                avatar: ''
            },
            activeStep: 0,
            steps: steps,
            errors: errors
        })
    };

    render() {
        return (
            <div className="register-container">
                <Steps
                    steps={this.state.steps}
                    activeStep={this.state.activeStep}/>

                {this.state.activeStep === 0 && (<BasicRegister
                    values={this.state.values}
                    errors={this.state.errors}
                    onInputChange={this.onInputChange}
                />)}

                {this.state.activeStep === 1 && (<ContactsRegister
                    values={this.state.values}
                    errors={this.state.errors}
                    onInputChange={this.onInputChange}
                />)}

                {this.state.activeStep === 2 && (<AvatarRegister
                    values={this.state.values}
                    errors={this.state.errors}
                    onFileInputChange={this.onFileInputChange}
                />)}

                {this.state.activeStep === 3 && (<FinishRegister
                    values={this.state.values}
                />)}

                <Navigation
                    steps={this.state.steps}
                    activeStep={this.state.activeStep}
                    validateData={this.validateData}
                    goPrev={this.goPrev}
                    resetData={this.resetData}
                />
            </div>
        );
    }

}
