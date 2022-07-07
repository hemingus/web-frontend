import React from "react";
import "./UrlBox.css";


const UrlBox = ( {urlId, text} ) => {
    return (
        <div className="url-box">
            <a className="url-box-text" href={urlId} type="button" target="_blank" rel="noreferrer">
                {text}
            </a>
        </div>
    )
}

export default UrlBox