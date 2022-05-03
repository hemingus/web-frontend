import React from "react";
import "./UrlBox.css";


const UrlBox = ( {urlId, text} ) => {
    return (
        <a className="url-box" href={urlId} type="button">
            {text}
        </a>
    )
}

export default UrlBox