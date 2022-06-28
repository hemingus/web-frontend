import React from "react";
import StarwarsCharacter from "../StarwarsCharacter/StarwarsCharacter";
import "./StarwarsCharacterContainer.css";
import "../StarwarsPlanetContainer/StarwarsPlanetContainer.css"

const StarwarsCharacterContainer = ({chars}) => {

    return (
        <div>
            <button onClick={() => chars.sort((a, b) => b.mass - a.mass)}>Sort by mass</button>
            <button onClick={() => chars.sort((a, b) => a.height - b.height)}>Sort by height</button>
            <h2 className="starwarsPlanetContainerHeader">Starwars Characters</h2>
            <div id='here' className="starwarsCharacterContainer">
            {chars.map((chars)=>(<StarwarsCharacter name={chars.name} height={chars.height} mass={chars.mass}/>))}
            </div>  
        </div>
    )
}

export default StarwarsCharacterContainer