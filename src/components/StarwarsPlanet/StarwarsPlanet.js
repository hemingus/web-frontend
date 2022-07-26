import React from 'react'
import "./StarwarsPlanet.css"

const StarwarsPlanet = ({name, diameter}) => {

    const adjustDia = Math.min(150000 / window.outerWidth, 150);

    return (
        <div>
            <ul className="starwarsPlanet">
                <li>Name: {name}</li>
                <li>Diameter: {diameter}</li>
            </ul>
            <span className="planetSphere" style={{height: diameter/adjustDia, width: diameter/adjustDia}}></span>
        </div>
    )
} 

export default StarwarsPlanet