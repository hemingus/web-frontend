import React from "react";
import StarwarsCharacter from "../StarwarsCharacter/StarwarsCharacter";
import "./StarwarsCharacterContainer.css";
import "../StarwarsPlanetContainer/StarwarsPlanetContainer.css"
import axios from 'axios'
import {useState, useEffect} from 'react'

const StarwarsCharacterContainer = () => {

    const pageSize = 10; // number of character info-cards showing on the page at a time.

    useEffect(() => {
        const getChars = async (url = "https://swapi.dev/api/people", accData = []) => {
            try {
            const res = await axios.get(url);
            accData = accData.concat(res.data.results);
            setChars(accData);
            if (res.data.next != null) {
                getChars(res.data.next, accData);
            } else {
                setLoading(false)
            }
            }
            catch (err) {
            alert(err.message);
            }
        }
        getChars();
    }, [])

    const [chars, setChars] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(true);
    const [showNumber, setShowNumber] = useState(0);
    

    const handleSearchInput = (event) => {
        setInputText(event.target.value);
        setShowNumber(0);
    }

    const filterChars = () => {
        if (inputText === "") {
            return chars
        }
        else {
            return chars.filter(eachObj => eachObj.name.toLowerCase().includes(inputText.toLowerCase()));
        }
    }

    const loadingText = () => {
        if (loading) {
            return (
                <p className="loading">Loading...</p>
            )
        } 
        return <p>Loading complete</p>
    }

    const characterCards = () => {
        return (
        <div className="starwarsCharacterContainer">
        {filterChars().slice(showNumber, showNumber+pageSize).map((chars)=>(<StarwarsCharacter key={chars.name} name={chars.name} height={chars.height} mass={chars.mass} 
        birth_year={chars.birth_year} eye_color={chars.eye_color} gender={chars.gender} hair_color={chars.hair_color} skin_color={chars.skin_color}/>))}
        </div> 
        ) 
    }

    const handleSortByHeight = () => {
        const heightUnknown = chars.filter(eachObj => isNaN(eachObj.height));
        const heightValues = chars.filter(eachObj => !isNaN(eachObj.height));
        const sortedValues = heightValues.slice().sort((a, b) => b.height - a.height);
        const sorted = sortedValues.concat(heightUnknown);
        setChars(sorted);
    }

    const handleSortByMass = () => {
        const massUnknown = chars.filter(eachObj => isNaN(eachObj.mass));
        const massValues = chars.filter(eachObj => !isNaN(eachObj.mass));
        const sortedValues = massValues.sort((a, b) => b.mass - a.mass);
        const sorted = sortedValues.concat(massUnknown);
        setChars(sorted);
    }

    const showNextPage = () => {
        const number = showNumber + pageSize;
        if (number >= filterChars().length) {
            return
        }
        else {
            setShowNumber(number);
        }     
    }

    const showPreviousPage = () => {
        const number = showNumber - pageSize;
        if (number < 0) {
            return
        }
        else {
            setShowNumber(number);
        }    
    }

    const handleReset = () => {
        setInputText("");
        document.getElementById("search").value = "";
    }

    const pageInfo = () => {
        const numberOfChars = filterChars().length;
        const fromNumber = Math.min(showNumber + 1, numberOfChars);
        const toNumber = Math.min(showNumber + pageSize, numberOfChars);
        
        return (
            <div className="pageInfo">
            {loadingText()}
            <p>{numberOfChars} results</p>
            <p style={numberOfChars <= 0 ? {opacity: 0}:{opacity: 1}}>{fromNumber} - {toNumber}</p>
            <button className={showNumber <= 0 ? "pageButtonLocked":"pageButton"} onClick={showPreviousPage}>Previous</button>
            <button className={showNumber + pageSize >= numberOfChars ? "pageButtonLocked":"pageButton"} onClick={showNextPage}>Next page</button>
            </div>
        )
    }
    
    return (
        <div>
            <h2 className="starwarsPlanetContainerHeader">Starwars Characters</h2>
            
            <input id="search" className="search" onChange={handleSearchInput} type="text" placeholder="search..."/>
            <button className="clearButton" onClick={handleReset}>Clear</button>
            <div className="sortButtonContainer">
            <button className="sortButton" onClick={handleSortByMass}>Sort by mass</button>
            <button className="sortButton" onClick={handleSortByHeight}>Sort by height</button>
            </div>
            {characterCards()};
            {pageInfo()};
        </div>
    )
}

export default StarwarsCharacterContainer