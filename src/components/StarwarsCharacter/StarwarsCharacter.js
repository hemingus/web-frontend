import React from 'react'
import "./StarwarsCharacter.css"

const StarwarsCharacter = ({name, height, mass, birth_year, eye_color, gender, hair_color, skin_color}) => {

    return (
        <div className="char">
        
            <ul className="nameplate">
                <li>Name: {name}</li>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
            </ul>
        
            <ul className="attributes">
                <li>Birth year: {birth_year}</li>
                <li>Eye color: {eye_color}</li>
                <li>Gender: {gender}</li>
                <li>Hair color: {hair_color}</li>
                <li>Skin color: {skin_color}</li>
            </ul>

        </div>
    )
} 

export default StarwarsCharacter