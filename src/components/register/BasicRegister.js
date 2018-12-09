import React from 'react'
import Field from "./Field";

const BasicRegister = (props) => {
    let {
        values: {
            firstName,
            lastName,
            password,
            repeatPassword,
            gender
        },
        errors,
        onInputChange
    } = props;
    return (
        <div className="form card-body">

            <Field
                id="firstName"
                labelText="firstName"
                name="firstName"
                type="text"
                placeholder="firstName"
                value={firstName}
                onChange={onInputChange}
                error={errors.firstName}
            />

            <Field
                id="lastName"
                labelText="lastName"
                name="lastName"
                type="text"
                placeholder="lastName"
                value={lastName}
                onChange={onInputChange}
                error={errors.lastName}
            />

            <Field
                id="password"
                labelText="Password"
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={onInputChange}
                error={errors.password}
            />

            <Field
                id="repeatPassword"
                labelText="Password"
                type="password"
                placeholder="Repeat password"
                name="repeatPassword"
                value={repeatPassword}
                onChange={onInputChange}
                error={errors.repeatPassword}
            />

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === "male"}
                    onChange={onInputChange}
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
                    checked={gender === "female"}
                    onChange={onInputChange}
                />
                <label
                    className="form-check-label"
                    htmlFor="female">
                    Female
                </label>
            </div>
        </div>
    )
};

export default BasicRegister;
