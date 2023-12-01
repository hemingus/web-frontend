import React from 'react'
import "./Navbar.css"
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CustomLink } from '../../utilities/CustomLink'
import Dropdown from '../DropdownMenu/Dropdown'

export default function Navbar() {
    const StarwarsDropdownProps = [
    {
      "title": "Planets",
      "route": "/planets"},
    {
      "title": "Characters",
      "route": "/characters"}
    ]

    const VideoDropdownProps = [
    {
      "title": "Music videos",
      "route": "/musicvideos"},
    {
      "title": "App videos",
      "route": "/appvideos"}
    ]

    const RegisterDropdownProps = [
    {
      "title": "Register",
      "route": "/register"},
    {
      "title": "Log in",
      "route": "/login"}
    ]

    const lines = '\u2630'
    const navRef = useRef(null)
    const [btnText, setBtnText] = useState(lines)

    const handleClick = () => {
        showNavBar()
        setBtnText((prevText) =>
          prevText === lines ? "Close" : lines
        );
      };

    const showNavBar = () => {
        navRef.current?.classList.toggle("responsive_nav")
    }


      
    return ( 
      <div className="nav">
        <nav  ref={navRef}>
          <Link to="/" className="site-title" style={{color: 'greenyellow'}}>
            Hemings Music Space
          </Link>
          <ul>
            <Dropdown title="User" elements={RegisterDropdownProps}/>
            <Dropdown title="Videos" elements={VideoDropdownProps}/>
            <CustomLink to="/animation">3D Animation</CustomLink>
            <Dropdown title="Starwars API" elements={StarwarsDropdownProps}/>
            <button onClick={handleClick}>{btnText}</button>
          </ul>
        </nav>
      </div>
    )      
}

