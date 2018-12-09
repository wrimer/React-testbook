import React from 'react'

const Navigation = (props) => {

    const {validateData, goPrev, steps, activeStep,resetData} = props;
    if (activeStep + 1 !== steps.length) {
        return (
            <div className="navigation">
                <button
                    className="navigation__prev"
                    onClick={goPrev}>Prev
                </button>
                <button
                    className="navigation__next"
                    onClick={validateData}
                >Next
                </button>
            </div>
        );
    } else {
        return (
            <div className="navigation">
                <button
                    className="navigation__reset"
                    onClick={resetData}
                >
                    Reset
                </button>
            </div>
        );
    }
};

export default Navigation;


