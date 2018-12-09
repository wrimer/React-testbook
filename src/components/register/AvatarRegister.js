import React from 'react'

const AvatarRegist = (props) => {
    let {
        values: {
            avatar
        },
        errors,
        onFileInputChange
    } = props;
    return (
        <div className="form card-body">
            <div className="form-group">
                <img src={avatar ? avatar : "https://via.placeholder.com/350x350"} alt="avatar"/>
                <label
                    htmlFor="fileAvatar">
                </label>
                <input
                    type="file"
                    className="form-control-file"
                    id="fileAvatar"
                    name="avatar"
                    onChange={onFileInputChange}
                />
                {errors.avatar? (
                <div className="invalid-feedback">
                    {errors.avatar}
                </div>
            ) : null}
            </div>
        </div>
    )
};

export default AvatarRegist;
