import { useState } from "react";
import empty_circle from "../assets/empty_circle.svg"
import half_circle from "../assets/half_circle.svg"
import full_circle from "../assets/full_circle.svg"

import "./ToggleButtonStyle.css"; 

function numToImage(num){
    if(num === 0){
        return empty_circle;
    }
    if(num === 1){
        return half_circle;
    }
    if(num === 2){
        return full_circle;
    }
}
function ToggleButton(props){
    const [type,setType]  = useState(numToImage(props.val));



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
