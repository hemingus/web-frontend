import React from 'react'
import "./Navbar.css"
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


      
    return ( 
      <nav className="nav">
        <Link to="/" className="site-title" style={{color: 'greenyellow'}}>
          Hemings Music Space
        </Link>
        <ul>
          <CustomLink to="/register">Register</CustomLink>
          <Dropdown title="Videos" elements={VideoDropdownProps}></Dropdown>
          <CustomLink to="/animation">3D Animation</CustomLink>
          <Dropdown title="Starwars API" elements={StarwarsDropdownProps}/>
        </ul>
      </nav>
    )      
}

