import React from "react";

const Ad = (props) => {
    return (
        <div className="ad">
            <div className="logo"></div>
            <h3 className="title">{props.title}</h3>
        </div>
    )
}
export default Ad;