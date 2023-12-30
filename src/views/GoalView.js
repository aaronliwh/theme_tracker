import "./ToggleButtonStyle.css"
import "./GoalViewStyle.css"
import empty_circle from "../assets/empty_circle.svg"
import half_circle from "../assets/half_circle.svg"
import full_circle from "../assets/full_circle.svg"
import { useState } from "react";

function GoalView(props) {
    const [inputValue, setInputValue] = useState(props.val.name);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        props.editGoal(props.id,null,e.target.value);
    };

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

    const ToggleButton = ({day}) => {
        const [type,setType]  = useState(numToImage(props.val[day]));
        function toggle() {
            if(type === empty_circle){
                setType(half_circle);
            } else if(type === half_circle){
                setType(full_circle);
            } else {
                setType(empty_circle);
            }
            props.editGoal(props.id,day);
        }
    
        return <img onClick={toggle} className = "circle" src={type} alt = "test"/>
    }

    return <div className="goalView">
            <button onClick = {props.removeGoalByVal}>Remove</button>
            <input className="goalText"
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Type something..." 
            />
            <ToggleButton day = {"mon"}/>
            <ToggleButton day = {"tue"}/>
            <ToggleButton day = {"wed"}/>
            <ToggleButton day = {"thu"}/>
            <ToggleButton day = {"fri"}/>
            <ToggleButton day = {"sat"}/>
            <ToggleButton day = {"sun"}/>
        </div>
}



export default GoalView;