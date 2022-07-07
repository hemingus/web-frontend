import React from "react";
import { useState, useEffect } from "react"

function interact() {
    alert("DaDa!")
}

const InteractiveLogo = ( {logoId} ) => {
    return (
        <div>
            <img className="InteractiveLogo" src={logoId} onClick={() => interact()} />
        </div>
    )
}

export default InteractiveLogo