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
  
    function saveGoals() {
      setGoals([...goals,inputValue]);
      setGoalsToDatabase([...goals,inputValue]);
    };

    function removeBasedOnIndex(val){
      const newGoals = [...goals].filter((task) => {
        return task != val;
      })
      setGoals(newGoals)
      setGoalsToDatabase(newGoals);
    }
  
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
    removeBasedOnIndex ={removeBasedOnIndex}
    saveGoals = {saveGoals}
    handleInputChange = {handleInputChange}
    />
  }


  export default MainPagePresenter;