import ToggleButton from "../utils/ToggleButton";
import empty_circle from "../assets/empty_circle.svg"
import half_circle from "../assets/half_circle.svg"
import full_circle from "../assets/full_circle.svg"
import { useState } from "react";

function GoalView(props) {

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

    const ToggleButton = ({val,save}) => {
        const [type,setType]  = useState(numToImage(val));
        function toggle() {
            if(type === empty_circle){
                setType(half_circle);
            } else if(type === half_circle){
                setType(full_circle);
            } else {
                setType(empty_circle);
            }
            save();
        }
    
        return <img onClick={toggle} className = "circle" src={type} alt = "test"/>
    }

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick = {props.remove}>Remove</button>
            <p style={{ display: 'inline-block', width: '120px', textOverflow: 'ellipsis', overflow: 'hidden',  whiteSpace: 'nowrap'}}>{props.val.name}</p>
            <ToggleButton val={props.val.mon} save={() => {props.save(props.id,"mon")}}/>
            <ToggleButton val={props.val.tue} save={() => {props.save(props.id,"tue")}}/>
            <ToggleButton val={props.val.wed} save={() => {props.save(props.id,"wed")}}/>
            <ToggleButton val={props.val.thu} save={() => {props.save(props.id,"thu")}}/>
            <ToggleButton val={props.val.fri} save={() => {props.save(props.id,"fri")}}/>
            <ToggleButton val={props.val.sat} save={() => {props.save(props.id,"sat")}}/>
            <ToggleButton val={props.val.sun} save={() => {props.save(props.id,"sun")}}/>
        </div>
}



export default GoalView;