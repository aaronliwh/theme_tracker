import GoalView from "./GoalView";
import {auth} from '../firebaseConfig';
import { useNavigate } from "react-router-dom";

function MainPageView(props) {
    let navigate = useNavigate();

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
    <button onClick={() => {
      auth.signOut()
      navigate("/")
      }}>
      Logout
    </button>
  </div>
}



export default MainPageView;