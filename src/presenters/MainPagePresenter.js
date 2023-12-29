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
  
    function addGoals() {
      const newGoal = {
        name : inputValue,
        mon : 0,
        tue : 0,
        wed : 0,
        thu : 0,
        fri : 0,
        sat : 0,
        sun : 0,
      }
      setGoals([...goals,newGoal]);
      setGoalsToDatabase([...goals,newGoal]);
    };

    function saveToDatabase(id,day){
      goals[id][day] += 1;
      goals[id][day] %= 3;
      setGoalsToDatabase(goals);
    }

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
    saveGoals = {addGoals}
    handleInputChange = {handleInputChange}
    saveToDatabase = {saveToDatabase}
    />
  }

  
  export default MainPagePresenter;