import React from 'react';
import {useState} from 'react';
import {Howl, Howler} from 'howler';
import "./GuitarTuner.css";
import LowEstring from "../../sounds/low-E-string.mp3";
import Astring from "../../sounds/A-string.mp3";
import Dstring from "../../sounds/D-string.mp3";
import Gstring from "../../sounds/G-string.mp3";
import Bstring from "../../sounds/B-string.mp3";
import HighEstring from "../../sounds/high-E-string.mp3";

const audioClips = [
    {sound: LowEstring, name: "E-string-low"},
    {sound: Astring, name: "A-string"},
    {sound: Dstring, name: "D-string"},
    {sound: Gstring, name: "G-string"},
    {sound: Bstring, name: "B-string"},
    {sound: HighEstring, name: "E-string-high"}
]

const GuitarTuner = () => {

    const [looping, setLooping] = useState(false);

    const stopAllSounds = () => {
        Howler.stop();
    }

    const toggleLooping = () => {
        if (looping) {
            Howler.stop();
            setLooping(false);
        }
        else {
            setLooping(true);
        }
    }

    const loopOnOff = () => {
        if (looping) {
            return "Loop On"
        }
        else {
            return "Loop Off"
        }
    }

    const PlaySound = (src) => {
        const sound = new Howl({
            src,
            loop: looping
        })
            sound.play();
    }

    const Strings = () => {
        return audioClips.map((string, index) => {
            return (
                <div className="string">
                    <button index={index} className={string.name} onClick={() => PlaySound(string.sound)} />     
                    <h2 className="stringLabel" onClick={() => PlaySound(string.sound)}>{string.name}</h2>
                </div>
            )
        })
    }
    return (
        <div className="guitarTunerContainer">
        <h1 className="guitarTunerHeader">Guitar Tuner</h1>
        <button className={looping? "loopingOn" : "loopingOff"} onClick={toggleLooping}>{loopOnOff()}</button>
        <button className="stopButton" onClick={stopAllSounds}>STOP</button>
        <div className="guitarTuner">
            {Strings()}
        </div>
        </div>
    )
}

export default GuitarTuner