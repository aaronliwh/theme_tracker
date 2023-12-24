import React, { useState, useEffect } from 'react';
import { getData,test } from '../firebaseModel';
import MainPageView from "../views/MainPageView"

function MainPagePresenter() {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleButtonClick = () => {
      test(inputValue);
    };
  
    useEffect(() => {
      getData()
      .then(res => {setInputValue(res)});
    },[])
  
  
   if(inputValue === ''){
    return <p>Please wait !</p>
   }
  
    return <MainPageView
    inputValue = {inputValue}
    handleButtonClick = {handleButtonClick}
    handleInputChange = {handleInputChange}
    />
  }


  export default MainPagePresenter;