import React from "react"
import "./MainMenu.css"
import UrlBox from "../UrlBox/UrlBox";

const MainMenu = () => {
    return (
        <h2>
            <ul className="main-menu-ul">
                <li><UrlBox urlId="https://www.vg.no" text="Nyheter" /></li>
                <li><UrlBox urlId="https://www.finn.no" text="Finn ting" /></li>
                <li><UrlBox urlId="https://www.yr.no" text="Været" /></li>
            </ul>
        </h2>
    )
}

export default MainMenu