import React from "react";


const Article = (props) => {

    return (
        <div className="Article">
            <div className="img"></div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}
export default Article;