import React from "react";
import countries from '../../data/countries'
import Field from './Field'

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            country: '1',
            gender: '',
            agreed: false,
            avatar: "",
            age: 0,
            errors: {
                username: false,
                password: false,
                repeatPassword: false,
                age: false
            }
        }
    }

    onSubmit = event => {
        event.preventDefault();

        const errors = {};

        if (this.state.username.length <= 5) {
            errors.username = "Username must be 6 characters or more"
        }

        if (this.state.password.length <= 5) {
            errors.password = "password must be 6 characters or more"
        }

        if (this.state.repeatPassword !== this.state.password) {
            errors.repeatPassword = "passwords doesnt match"
        }


        if (!Object.keys(errors).length) {
            this.setState({errors: {}});
            console.log(this.state)
        } else {
            this.setState({
                errors: errors
            });
        }

    };

    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onCheckboxChange = event => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    };

    onFileInputChange = event => {
        const fileReader = new FileReader();
        fileReader.onload = event => {
            this.setState({
                "avatar": event.target.result
            })
        };

        fileReader.readAsDataURL(event.target.files[0])
    };

    getOptionsItems = (items) => {
        return items.map(item => (
            <option
                key={item.id}
                value={item.id}
            >
                {item.name}
            </option>
        ))
    };

    decrementAge = () => {
        this.setState({
                age: this.state.age - 1
            }
        )
    };

    incrementAge = () => {
        this.setState({
                age: this.state.age + 1
            }
        )
    };


    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">

                    <Field
                        id="username"
                        labelText="username"
                        name="username"
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onInputChange}
                        error={this.state.errors.username}
                    />

                    <Field
                        id="password"
                        labelText="Password"
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onInputChange}
                        error={this.state.errors.password}
                    />

                    <Field
                        id="repeatPassword"
                        labelText="Password"
                        type="password"
                        placeholder="Repeat password"
                        name="repeatPassword"
                        value={this.state.repeatPassword}
                        onChange={this.onInputChange}
                        error={this.state.errors.repeatPassword}
                    />

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            className="form-control"
                            id="country"
                            name="country"
                            value={this.state.country}
                            onChange={this.onInputChange}
                        >
                            {this.getOptionsItems(countries)}
                        </select>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.onInputChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.onInputChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               id="checkbox"
                               name="agreed"
                               value={this.state.agreed}
                               checked={this.state.agreed === true}
                               onChange={this.onCheckboxChange}/>
                        <label
                            className="form-check-label"
                            htmlFor="checkbox">
                            Agreed
                        </label>
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="fileAvatar">
                            Example file input
                        </label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="fileAvatar"
                            name="avatar"
                            onChange={this.onFileInputChange}
                        />
                    </div>
                    <div className="btn-group">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={this.decrementAge}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter age"
                            name="age"
                            value={this.state.age}
                            onChange={this.onInputChange}
                        />
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={this.incrementAge}
                        >
                            +
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
