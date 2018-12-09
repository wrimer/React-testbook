import React from 'react'

const AvatarRegist = (props) => {
    let {
        values: {
            firstName,
            lastName,
            password,
            repeatPassword,
            gender,
            mail,
            phone,
            country,
            city,
            avatar
        }
    } = props;
    return (
        <div className="form card-body">

            <p>firstName: {firstName}</p>
            <p>lastName: {lastName}</p>
            <p>password: {password}</p>
            <p>repeatPassword: {repeatPassword}</p>
            <p>gender: {gender}</p>
            <p>mail: {mail}</p>
            <p>phone: {phone}</p>
            <p>country: {country}</p>
            <p>city: {city}</p>
            <p>avatar: {avatar}</p>



        </div>
    )
};

export default AvatarRegist;
