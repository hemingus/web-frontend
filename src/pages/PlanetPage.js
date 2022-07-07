import React from 'react'
import StarwarsPlanetContainer from '../components/StarwarsPlanetContainer/StarwarsPlanetContainer';
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function PlanetPage() {
    useEffect(() => {
        getPlanets();
    })
    const [planets, setPlanets] = useState([])
    const getPlanets = async () => {
        try {
        const res = await axios.get("https://swapi.dev/api/planets");
        setPlanets(res.data.results);  
        }
        catch (err) {
        alert(err.message);
        }
    }

    return (
        <StarwarsPlanetContainer planets={planets}/>
    )
}