import React from "react";
import StarwarsCharacter from "../StarwarsCharacter/StarwarsCharacter";
import "./StarwarsCharacterContainer.css";
import "../StarwarsPlanetContainer/StarwarsPlanetContainer.css"
import axios from 'axios'
import {useState, useEffect} from 'react'

const StarwarsCharacterContainer = () => {
    useEffect(() => {
        getChars();
    }, [])
    const [chars, setChars] = useState([])
    const getChars = async () => {
        try {
        const res = await axios.get("https://swapi.dev/api/people");
        setChars(res.data.results);  
        }
        catch (err) {
        alert(err.message);
        }
    }

    const handleSortByHeight = () => {
        const sorted = chars.slice().sort((a, b) => b.height - a.height);
        setChars(sorted);
    }

    const handleSortByMass = () => {
        const sorted = chars.slice().sort((a, b) => b.mass - a.mass);
        setChars(sorted);
    }
    return (
        <div>
            <h2 className="starwarsPlanetContainerHeader">Starwars Characters</h2>
            <button className="sortButton" onClick={handleSortByMass}>Sort by mass</button>
            <button className="sortButton" onClick={handleSortByHeight}>Sort by height</button>
            <div className="starwarsCharacterContainer">
            {chars.map((chars)=>(<StarwarsCharacter name={chars.name} height={chars.height} mass={chars.mass}/>))}
            </div>  
        </div>
    )
}

export default StarwarsCharacterContainer