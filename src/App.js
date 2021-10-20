import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskForm from './components/TaskForm';
import Details from "./components/Details";

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  const checkLocalStorage = useCallback(() => {
    if(localStorage.getItem("tasks") === null){
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }else{
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
    setLocalStorageLoaded(true);
  }, [tasks]);

  useEffect(() => {
    if(!localStorageLoaded) checkLocalStorage();
  }, [localStorageLoaded, checkLocalStorage]);

  const handleTaskAddition = (taskTitle, taskDescription) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      description: taskDescription,
      id: uuidv4(),
      completed: false
    }];

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, completed: !task.completed }
      }

      return task;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" exact render={() => (
            <>
              <TaskForm handleTaskAddition={handleTaskAddition}/>
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />
            </>
          )}
        />
        <Route path="/:taskId" exact render={() => (
            <>
              <Details tasks={tasks}/>
            </>
          )}
        />
         </div>
    </Router>
  )
};

export default App;
