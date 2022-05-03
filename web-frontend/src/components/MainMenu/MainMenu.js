import React from "react"
import "./MainMenu.css"

const MainMenu = () => {
    return (
        <h2>
            <ul className="main-menu-ul">
                <li><a href="vg.no">Nyheter</a></li>
                <li><a href="finn.no">Finn ting</a></li>
                <li><a href="yr.no">Været</a></li>
            </ul>
        </h2>
    )
}

export default MainMenu