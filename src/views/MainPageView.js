import GoalView from "./GoalView";

function MainPageView(props) {

    return <div className="App">
    <input 
      type="text" 
      value={props.inputValue} 
      onChange={props.handleInputChange} 
      placeholder="Type something..." 
    />
    <button onClick={props.saveGoals}>
      Do Nothing
    </button>
    {props.goals.map((val,index) => {
      return <ul key = {index}>
        <GoalView 
          val={val}
          id={index}
          remove={() => {props.removeBasedOnIndex(val)}}
          save={props.saveToDatabase}/>
        </ul>
      })}
  </div>
}



export default MainPageView;