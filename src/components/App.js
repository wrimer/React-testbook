import React from "react";
import countries from '../data/countries'

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
            errors: {
                username: false,
                password: false,
                repeatPassword: false
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
            console.log('Done')
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


    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={this.onInputChange}
                            ref={node => (this.username = node)}
                        />
                        {this.state.errors.username ? (
                            <div className="invalid-feedback">
                                {this.state.errors.username}
                            </div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            type="text"
                            className="form-control"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                            ref={node => (this.password = node)}
                        />
                        {this.state.errors.password ? (
                            <div className="invalid-feedback">
                                {this.state.errors.password}
                            </div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            name="repeatPassword"
                            type="text"
                            className="form-control"
                            placeholder="Enter repeat password"
                            value={this.state.repeatPassword}
                            onChange={this.onInputChange}
                            ref={node => (this.repeatPassword = node)}
                        />
                        {this.state.errors.repeatPassword ? (
                            <div className="invalid-feedback">
                                {this.state.errors.repeatPassword}
                            </div>
                        ) : null}
                    </div>

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
