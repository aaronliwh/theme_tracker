import { useState } from "react";
import empty_circle from "../assets/empty_circle.svg"
import half_circle from "../assets/half_circle.svg"
import full_circle from "../assets/full_circle.svg"

import "./ToggleButtonStyle.css"; 

function ToggleButton(){
    const [type,setType]  = useState(empty_circle);

    function toggle() {
        if(type === empty_circle){
            setType(half_circle);
        } else if(type === half_circle){
            setType(full_circle);
        } else {
            setType(empty_circle);
        }
    }

    return <img onClick={toggle} className = "circle" src={type} alt = "test"/>
}

export default ToggleButton;
