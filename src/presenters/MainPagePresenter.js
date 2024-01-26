import React, { useState, useEffect } from 'react';
import {setGoalsToDatabase, getGoalsFromDatabase} from '../firebaseModel';
import MainPageView from "../views/MainPageView"
import {auth} from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import { defaultGoal } from '../utils/utils';

function MainPagePresenter() {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [goals,setGoals] = useState(["one","two","three"]);
    const [loading,setLoading] = useState(true)

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    function addGoal() {
      if(inputValue === ""){
        return;
      }

      const newGoal = defaultGoal(inputValue)
      setGoals([...goals,newGoal]);
      setGoalsToDatabase([...goals,newGoal]);
    };

    function editGoal(id,day=null,newText=goals[id]["name"]){
      goals[id]["name"] = newText
      if(day){
        goals[id][day] += 1;
        goals[id][day] %= 3;
      }
      setGoalsToDatabase(goals);
    }

    function removeGoal(val){
      const newGoals = [...goals].filter((task) => {
        return task !== val;
      })
      setGoals(newGoals)
      setGoalsToDatabase(newGoals);
    }

  
    useEffect(() => {
      if(!auth.currentUser){
        navigate("/")
      }
      getGoalsFromDatabase()
      .then(res => {
        res === null ? setGoals([]) : setGoals(res)
        setLoading(false);
      });
    },[])
  
  
   if(loading){
    return <p>Please wait !</p>
   }

   
  
    return <MainPageView
    goals = {goals}
    removeGoal ={removeGoal}
    addGoal = {addGoal}
    editGoal = {editGoal}
    handleInputChange = {handleInputChange}
    />
  }

  
  export default MainPagePresenter;