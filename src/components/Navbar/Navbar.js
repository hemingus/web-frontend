import React from 'react'
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return ( 
      <nav className="nav">
        <Link to="/" className="site-title" style={{color: 'greenyellow'}}>
          Hemings Music Space
        </Link>
        <ul>
          <CustomLink to="/videos">Videos</CustomLink>
          <CustomLink to="/planets">Starwars Planets</CustomLink>
          <CustomLink to="/characters">Starwars Characters</CustomLink>
          <CustomLink to="/animation">3D Animation</CustomLink>
        </ul>
      </nav>
    )      
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}