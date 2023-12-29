import ToggleButton from "../utils/ToggleButton";


function GoalView(props) {

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick = {props.remove}>Remove</button>
            <p style={{ display: 'inline-block', width: '120px', textOverflow: 'ellipsis', overflow: 'hidden',  whiteSpace: 'nowrap'}}>{props.val}</p>
            <ToggleButton/>
            <ToggleButton/>
            <ToggleButton/>
            <ToggleButton/>
            <ToggleButton/>
            <ToggleButton/>
            <ToggleButton/>
        </div>
}



export default GoalView;