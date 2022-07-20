import React from "react";

function interact() {
    alert("DaDa!")
}

const InteractiveLogo = ( {logoId} ) => {
    return (
        <div>
            <img className="InteractiveLogo" src={logoId} alt="Logo" onClick={() => interact()} />
        </div>
    )
}

export default InteractiveLogo