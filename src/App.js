import { useEffect, useState } from "react";
import Form from "./components/from/Form";
import TaskList from "./components/task-list/TaskList";

import Snowfall from 'react-snowfall'


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo-tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })

  useEffect(() =>{
    localStorage.setItem("todo-tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTaskHandler = (task) =>{
    setTasks(oldTasks => [...oldTasks, task])
  }

  const deleteTaskHandler = (id) =>{
    setTasks(oldTasks => oldTasks.filter(task => task.id !== id))
  }

  const updateToggleTaskHandler = (id) =>{
    setTasks(oldTasks => oldTasks.map(task => task.id === id ? {...task, isComplete: !task.isComplete } : task))
    
  }

  const editTaskHandler = (id, newName) =>{
    setTasks(oldTasks => oldTasks.map(task => task.id === id ? {...task, name: newName} : task))
  }

  return (
    <div className="App">
    <Snowfall/>
      <div className="fullWrapper">
      <Form addTask={addTaskHandler}/>
      {tasks && 
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTaskHandler}
          updateTask={updateToggleTaskHandler}
          editTask={editTaskHandler}
        />
      }
      </div>
    </div>
  );
}

export default App;
