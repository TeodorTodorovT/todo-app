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

  return (
    <div className="App">
      <Form addTask={addTaskHandler}/>
      {tasks && 
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTaskHandler}
        />
      }
    </div>
  );
}

export default App;
