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

    const [chars, setChars] = useState([]);
    const [inputText, setInputText] = useState("");
    
    const getChars = async () => {
        try {
        const res = await axios.get("https://swapi.dev/api/people");
        setChars(res.data.results);
        }
        catch (err) {
        alert(err.message);
        }
    }

    const handleSearchInput = (event) => {
        setInputText(event.target.value);
        console.log(inputText);
    }

    const filterChars = () => {
        if (inputText == "") {
            return chars
        }
        else {
            return chars.filter(eachObj => eachObj.name.toLowerCase().includes(inputText.toLowerCase()));
        }
    }

    const handleSortByHeight = () => {
        const sorted = chars.slice().sort((a, b) => b.height - a.height);
        console.log(chars);
        console.log(chars.name);
        console.log(chars.map((chars) => chars.name));
        setChars(sorted);
    }

    const handleSortByMass = () => {
        const sorted = chars.slice().sort((a, b) => b.mass - a.mass);
        setChars(sorted);
    }

    const handleReset = () => {
        setInputText("");
        document.getElementById("search").value = "";
    }
    
    return (
        <div>
            <h2 className="starwarsPlanetContainerHeader">Starwars Characters</h2>
            <input id="search" className="search" onChange={handleSearchInput} type="text" placeholder="search..."/>
            <button className="clearButton" onClick={handleReset}>Clear</button>
            <button className="sortButton" onClick={handleSortByMass}>Sort by mass</button>
            <button className="sortButton" onClick={handleSortByHeight}>Sort by height</button>
            <div className="starwarsCharacterContainer">
            {filterChars().map((chars)=>(<StarwarsCharacter name={chars.name} height={chars.height} mass={chars.mass} 
            birth_year={chars.birth_year} eye_color={chars.eye_color} gender={chars.gender} hair_color={chars.hair_color} skin_color={chars.skin_color}/>))}
            </div>  
        </div>
    )
}

export default StarwarsCharacterContainer