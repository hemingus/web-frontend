import "./Footer.css"


const Footer = () => {
    const a = () => {
        var d = new Date(Date.now()); 
        console.log(toString(d)); 
        return d.toString();
    }
    return ( 
    <h5 className="Footer">Date: {() => a()}</h5> 
)}
export default Footer