import React, { useState } from 'react';
import './App.css';
import Task from './task.js';

function App() {
  const [taskName, setTaskName]= useState("");
  // task name is the variable, set task name allows it to be updated and use state is the initial value
  // also adding set allows it to be used out side of scope.
  const [time, setTime]= useState("");
  const [taskList, setTaskList]= useState([
    // {task: "hello", time:"34"}
  ]);

  const addTask = ()=> {
  setTaskList([...taskList, {task: taskName, time:time}])
  //taskList.append({task: taskName, time:time})

  } 
 const reloadPage = () => {
  window.location.reload();
 }
  return (
    <div className="App">
        <div className="header">
         <h1>To do list</h1>
        </div>
        <h2>Task Name</h2>
        <input type ="text" onChange={(event) => {
          setTaskName(event.target.value)
        }}></input>
        <h2>Time Taken</h2>
        <input type ="text" id ="time"  onChange={(event) => {
          setTime(event.target.value)
        }}></input>
        <button onClick={addTask}> Add </button>
        <button onClick={reloadPage}> Reset</button>

        {taskList.map((task80) => {
          return <Task taskName={task80.task} time={task80.time}/>
          // so because Green task is a component that has two properties we need to define them in here somwhere. 
          // we are saying that tasklist is an array of objects of name task80 with two properties task (with the value taskName) and time (with the value time)
          // we use setTaskName to modify the state of taskName to accept the user input similarly to setTime.
          // Therefore the object task80 has taskName and time modified to whatever the user input is
        })}

        {
          // <Task taskName={taskList[0].task} time={taskList[0].time}/>
          // <Task taskName={taskList[1].task} time={taskList[1].time}/>
        }
    </div>
  );
}

export default App;
