import React from "react";

const FirstAd = (props) => {
    return (
        <div className="FirstAd">
            <span onClick={props.exit}>X</span>
        </div>
    )
}
export default FirstAd;