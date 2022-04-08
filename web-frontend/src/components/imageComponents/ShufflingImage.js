import react from "react"
import { useState, useEffect } from "react"


const ShufflingImage = (props) => {
    const images = props.imageList
    
    const [image, setImage] = useState("asdf")

    let currentPos = 0;
    function swapImage() {
        if (++currentPos >= images.length) {
                  currentPos = 0;
        }
        setImage(images[currentPos]);
    }
        
    useEffect(() => {const interval = setInterval(swapImage, 3000); return () => clearInterval(interval)},[image])
    
    return <div><img src={image}/></div> 

    
}

export default ShufflingImage

// return <div>
// <img id="image" src="gulkins1.jpg"></img>
// <script type = "text/javascript">
//     var image = document.getElementById("image");
//     var images = ["gulkins1.jpg", "gulkins2.jpg"]
//     var currentPos = 0;

//     function swapImage() {
//         if (++currentPos >= images.length) {
//             currentPos = 0;
//         }
//         setImage(images[currentPos]);
//     }

//     setInterval(swapImage, 3000);
// </script>
// </div>