import React from 'react'

const Field = (props) => {
    const {id, labelText, name, type, placeholder, value, onChange, error} = props;
    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                name={name}
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error ? (
                <div className="invalid-feedback">
                    {error}
                </div>
            ) : null}
        </div>
    );
};

export default Field;
