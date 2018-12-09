import React from 'react'

const Steps = (props) => {

    const {steps} = props;
    return (
        <div className="steps">
            <ul className="steps__list">
                {steps.map((item, index) => {
                    return (
                        <li
                            key={item.name}
                            className={
                                "steps__item step " +
                                (item.isValid ? "step_valid " : "") +
                                (steps[index].isActive ? "step_active " : "")}>
                            <div className="step__count">{index + 1}</div>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Steps;
