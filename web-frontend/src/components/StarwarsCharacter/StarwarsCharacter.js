import React from 'react'
import "./StarwarsCharacter.css"

const StarwarsCharacter = ({name, height, mass}) => {
    
    return (
        <div className="char">
            <ul className="starwarsCharacter">
                <li>Name: {name}</li>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
            </ul>
        </div>
    )
} 

export default StarwarsCharacter