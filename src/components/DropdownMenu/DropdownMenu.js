import React from 'react'
import { CustomLink } from '../../utilities/CustomLink'
import "./DropdownMenu.css"

const DropdownMenu = ({elements}) => {
    return (
        <ul>
            {elements.map(element => 
            <CustomLink id={element.title} to={element.route} children={element.title}></CustomLink>)}
        </ul>
    )
}

export default DropdownMenu