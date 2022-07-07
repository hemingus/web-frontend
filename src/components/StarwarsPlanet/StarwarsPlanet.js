import React from 'react'
import "./StarwarsPlanet.css"

const StarwarsPlanet = ({name, diameter}) => {
    
    return (
        <div>
            <ul className="starwarsPlanet">
                <li>Name: {name}</li>
                <li>Diameter: {diameter}</li>
            </ul>
            <span className="planetSphere" style={{height: diameter/100, width: diameter/100}}></span>
        </div>
    )
} 

export default StarwarsPlanet