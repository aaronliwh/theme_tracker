import full_circle from "../assets/full_circle.svg"

function GoalView(props) {

    function toggleButton(val){
        return <img style={{ display: 'inline-block', width: '24px', opacity: val.toString() }} src={full_circle} alt = "test"/>
    }

    return <div >
            <p style={{ display: 'inline-block' }}>{props.val}</p>
            {toggleButton(1)}
            {toggleButton(0.66)}
        </div>
}



export default GoalView;