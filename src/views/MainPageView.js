function MainPagePresenter(props) {
    return <div className="App">
    <input 
      type="text" 
      value={props.inputValue} 
      onChange={props.handleInputChange} 
      placeholder="Type something..." 
    />
    <button onClick={props.handleButtonClick}>
      Do Nothing
    </button>
    {props.goals.map((val) => {return <p>{val}</p>})}
  </div>
}



export default MainPagePresenter;