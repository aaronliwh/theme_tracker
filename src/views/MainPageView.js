import GoalView from "./GoalView";

function MainPagePresenter(props) {

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
    {props.goals.map((val) => {
      return <GoalView val={val}/>
      })}
  </div>
}



export default MainPagePresenter;