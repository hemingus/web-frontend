import React from "react";
import StarwarsPlanet from "../StarwarsPlanet/StarwarsPlanet";
import "./StarwarsPlanetContainer.css";

const StarwarsPlanetContainer = ({planets}) => {
    return (
        <div>
            <h2 className="starwarsPlanetContainerHeader">Starwars Planets</h2>
            <div className="starwarsPlanetContainer">
            {planets.map((planet)=>(<StarwarsPlanet name={planet.name} diameter={planet.diameter}/>))}
            </div>  
        </div>
    )
}

export default StarwarsPlanetContainer