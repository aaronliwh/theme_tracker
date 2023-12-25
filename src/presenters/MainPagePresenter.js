import React, { useState, useEffect } from 'react';
import {setGoalsToDatabase, getGoalsFromDatabase} from '../firebaseModel';
import MainPageView from "../views/MainPageView"

function MainPagePresenter() {
    const [inputValue, setInputValue] = useState('');
    const [goals,setGoals] = useState(["one","two","three"]);
    const [loading,setLoading] = useState(true)

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const saveGoals = () => {
      setGoals([...goals,inputValue]);
      setGoalsToDatabase([...goals,inputValue]);
      
    };
  
    useEffect(() => {
      getGoalsFromDatabase()
      .then(res => {
        setGoals(res)
        setLoading(false);
      });
    },[])
  
  
   if(loading){
    return <p>Please wait !</p>
   }
  
    return <MainPageView
    goals = {goals}
    saveGoals = {saveGoals}
    handleInputChange = {handleInputChange}
    />
  }


  export default MainPagePresenter;