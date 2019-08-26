import React from "react";

const Ad = (props) => {
    return (
        <div className="ad">
            <div className="logo"></div>
            <h3 className="title">{props.title}</h3>
            <p className="textAd">{props.text}</p>
            <button className="viewAd">Więcej</button>
        </div>
    )
}
export default Ad;