import { useState } from "react";

export default function Button({color}){

    const [buttonColor, setButtonColor] = useState(color);

    function handleHover(){
        setButtonColor(color);
    }

    return <button style={{backgroundColor: buttonColor}} onMouseOver={handleHover}></button>;
}