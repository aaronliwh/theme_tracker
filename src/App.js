import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
  };

  return (
    <div className="App">
      {/* Input field with onChange handler */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..." 
      />

      {/* Button with onClick handler */}
      <button onClick={handleButtonClick}>
        Do Nothing
      </button>

      {/* Display the input value */}
      <p>Wassup: {inputValue}</p>
    </div>
  );
}

export default App;