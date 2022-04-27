import react from "react"
import "./ShufflingImage.css"
import { useState, useEffect } from "react"

let currentPos = 1;

const ShufflingImage = (props) => {
    const images = props.imageList
    
    const [image, setImage] = useState("gulkins1.jpg")

    function swapImage() {
        setImage(images[currentPos]);
        if (++currentPos >= images.length) {
            currentPos = 0;
        }
        
    }
        
    useEffect(() => {const interval = setInterval(swapImage, 3000); return () => clearInterval(interval)},[image])
    
    return <div><img className="ShufflingImage" src={image}/></div> 

    
}

export default ShufflingImage