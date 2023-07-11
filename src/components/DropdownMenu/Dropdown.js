import React from 'react'
import {useState, useRef } from 'react'
import DropdownMenu from './DropdownMenu'
import "./DropdownMenu.css"

const Dropdown = ({title, elements}) => {
    const dropdownRef = useRef(null)
    const [isDropped, setDropped] = useState(false)
    
    return (
        <li onMouseOver={() => setDropped(true)} onMouseLeave={() => setDropped(false)} ref={dropdownRef}>
            {title}
            {isDropped && <DropdownMenu elements={elements}/>}
        </li>
    )
}

export default Dropdown