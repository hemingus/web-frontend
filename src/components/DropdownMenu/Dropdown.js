import React from 'react'
import {useState, useRef, useEffect} from 'react'
import { useOnHoverOutside } from '../../utilities/onHoverEffects'
import DropdownMenu from './DropdownMenu'

const Dropdown = ({title, elements}) => {
    const dropdownRef = useRef(null)
    const [isDropped, setDropped] = useState(false)
    
    const closeDropdownMenu = () => {
        setDropped(false)
    }

    useOnHoverOutside(dropdownRef, closeDropdownMenu)



    return (
        <li onMouseOver={() => setDropped(true)}>
            {title}
            {isDropped && <DropdownMenu elements={elements}/>}
        </li>
    )
}

export default Dropdown