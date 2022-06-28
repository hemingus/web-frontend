import React from 'react'
import StarwarsCharacterContainer from '../components/StarwarsCharacterContainer/StarwarsCharacterContainer';
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function CharacterPage() {
    useEffect(() => {
        getChars();
    })
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
     
    return (
        <div>
            <StarwarsCharacterContainer chars={chars} />
        </div>

    )
}