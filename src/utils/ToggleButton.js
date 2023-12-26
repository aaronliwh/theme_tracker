import { useState } from "react";
import full_circle from "../assets/full_circle.svg"
import "./ToggleButtonStyle.css"; 

function ToggleButton(props){
    const [opacity,setOpacity]  = useState(0.99);

    function toggle() {
        if(opacity === 0.99){
            setOpacity(0.33);
        } else {
            setOpacity(opacity + 0.33);
        }
    }

    return <img onClick={toggle} className = "circle" style={{ opacity: opacity.toString() }} src={full_circle} alt = "test"/>
}

export default ToggleButton;