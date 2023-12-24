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
    <p>Wassup: {props.inputValue}</p>
  </div>
}



export default MainPagePresenter;