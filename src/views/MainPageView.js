import GoalView from "./GoalView";

function MainPageView(props) {

    

    return <div className="App">
    <input 
      type="text" 
      value={props.inputValue} 
      onChange={props.handleInputChange} 
      placeholder="Type something..." 
    />
    <button onClick={props.addGoal}>
      Do Nothing
    </button>
    {props.goals.map((val,index) => {
      return <ul key = {index} style={{width : '100%'}}>
        <GoalView 
          val={val}
          id={index}
          removeGoalByVal={() => {props.removeGoal(val)}}
          editGoal={props.editGoal}/>
        </ul>
      })}
  </div>
}



export default MainPageView;