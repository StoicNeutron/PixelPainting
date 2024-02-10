import { useState } from "react";

export default function Button({color, size}){

    const [buttonColor, setButtonColor] = useState(color);

    function handleHover(){
        setButtonColor(color);
    }

    if (size === 6) {
        return <button style={{ backgroundColor: buttonColor, width: '80px', height: '80px'}} onMouseOver={handleHover}></button>;
    } else if (size === 12) {
        return <button style={{ backgroundColor: buttonColor, width: '40px', height: '40px'}} onMouseOver={handleHover}></button>;
    } else if (size === 24) {
        return <button style={{ backgroundColor: buttonColor, width: '20px', height: '20px', marginTop: '-5px', marginBottom: '-5px'}} onMouseOver={handleHover}></button>;
    }
}