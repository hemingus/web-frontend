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
    const [loading, setLoading] = useState(true);
    
    const getChars = async (url = "https://swapi.dev/api/people", accData = []) => {
        try {
        const res = await axios.get(url);
        if (res.data.next == null) {
            accData = accData.concat(res.data.results);
            setChars(accData);
            setLoading(false); 
        }
        else {
            accData = accData.concat(res.data.results);
            getChars(res.data.next, accData);
        }}
        catch (err) {
        alert(err.message);
        }
    }

    const handleSearchInput = (event) => {
        setInputText(event.target.value);
    }

    const filterChars = () => {
        if (inputText === "") {
            return chars
        }
        else {
            return chars.filter(eachObj => eachObj.name.toLowerCase().includes(inputText.toLowerCase()));
        }
    }

    const characterCards = () => {
        if (loading) {
            return (
                <div className="starwarsCharacterContainer">
                <p className="loading">Loading...</p>
                </div>
            )
        }
        else {
            return (
            <div className="starwarsCharacterContainer">
            {filterChars().slice(0, 20).map((chars)=>(<StarwarsCharacter name={chars.name} height={chars.height} mass={chars.mass} 
            birth_year={chars.birth_year} eye_color={chars.eye_color} gender={chars.gender} hair_color={chars.hair_color} skin_color={chars.skin_color}/>))}
            </div> 
            )
        }
        
    }

    const handleSortByHeight = () => {
        const sorted = chars.slice().sort((a, b) => b.height - a.height);
        setChars(sorted);
    }

    const handleSortByMass = () => {
        const massUnknown = chars.filter(eachObj => isNaN(eachObj.mass));
        const massValues = chars.filter(eachObj => !isNaN(eachObj.mass));
        const sortedValues = massValues.sort((a, b) => b.mass - a.mass);
        const sorted = sortedValues.concat(massUnknown);
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
            {characterCards()};
        </div>
    )
}

export default StarwarsCharacterContainer