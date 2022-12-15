import { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";


function App() {
  const [tasks, setTasks] = useState([])

  const addTaskHandler = (task) =>{
    setTasks(oldTasks => [...oldTasks, task])
  }

  const deleteTaskHandler = (id) =>{
    setTasks(oldTasks => oldTasks.filter(task => task.id !== id))
  }

  const updateTaskHandler = (id) =>{
    setTasks(oldTasks => oldTasks.map(task => task.id === id ? {...task, isComplete: !task.isComplete } : task))
    
  }

  return (
    <div className="App">
      <Form addTask={addTaskHandler}/>
      {tasks && 
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTaskHandler}
          updateTask={updateTaskHandler}
        />
      }
    </div>
  );
}

export default App;
