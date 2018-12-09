import React from 'react'
import Field from "./Field";
import countries from "../../data/countries";
import cities from "../../data/cities";

function getCountriesItems(items) {
    return items.map(item => (
        <option
            key={item.id}
            value={item.id}
        >
            {item.name}
        </option>
    ))
}

function getCitiesItems(items, country) {

    let validCities = [];

    Object.getOwnPropertyNames(items).forEach(key => {
        if (items[key].country === +country) {
            validCities.push(
                <option
                    key={key}
                    value={key}>
                    {items[key].name}
                </option>
            )
        }
    });

    return validCities;
}

const BasicRegister = (props) => {
    let {
        values: {
            mail,
            phone,
            country,
            city
        },
        errors,
        onInputChange
    } = props;
    return (
        <div className="form card-body">

            <Field
                id="mail"
                labelText="mail"
                name="mail"
                type="text"
                placeholder="mail"
                value={mail}
                onChange={onInputChange}
                error={errors.mail}
            />

            <Field
                id="phone"
                labelText="phone"
                name="phone"
                type="text"
                placeholder="phone"
                value={phone}
                onChange={onInputChange}
                error={errors.phone}
            />

            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                    className="form-control"
                    id="country"
                    name="country"
                    value={country}
                    onChange={onInputChange}
                >
                    {getCountriesItems(countries)}
                </select>
                {errors.country? (
                    <div className="invalid-feedback">
                        {errors.country}
                    </div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="city">Country</label>
                <select
                    className="form-control"
                    id="city"
                    name="city"
                    value={city}
                    onChange={onInputChange}
                >
                    {getCitiesItems(cities, country)}
                </select>
                {errors.city? (
                    <div className="invalid-feedback">
                        {errors.city}
                    </div>
                ) : null}
            </div>
        </div>
    )
};

export default BasicRegister;
