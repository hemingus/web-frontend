import "./Footer.css"


const Footer = () => {
    const getDate = () => {
        const date = new Date(); 
        return date.toDateString();
    }
    return ( 
    <h5 className="Footer">{getDate()}</h5> 
)}
export default Footer