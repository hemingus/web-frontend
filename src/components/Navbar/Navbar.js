import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { CustomLink } from '../../utilities/CustomLink'
import Dropdown from '../DropdownMenu/Dropdown'

export default function Navbar() {
    const StarwarsDropdownProps = [
    {
      "title": "Starwars Planets",
      "route": "/planets"},
    {
      "title": "Starwars Characters",
      "route": "/characters"}
    ]


      
    return ( 
      <nav className="nav">
        <Link to="/" className="site-title" style={{color: 'greenyellow'}}>
          Hemings Music Space
        </Link>
        <ul>
          <CustomLink to="/videos" children="VideosOSO"></CustomLink>
          <CustomLink to="/animation">3D Animation</CustomLink>
          <Dropdown title="Starwars API" elements={StarwarsDropdownProps}/>
        </ul>
      </nav>
    )      
}

