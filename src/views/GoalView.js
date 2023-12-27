import ToggleButton from "../utils/ToggleButton";

function GoalView(props) {

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ display: 'inline-block'}}>{props.val}</p>
            <ToggleButton/>
            <button onClick = {props.remove}>Remove</button>
        </div>
}



export default GoalView;