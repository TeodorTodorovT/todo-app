import { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";


function App() {
  const [tasks, setTasks] = useState([])

  const addTaskHandler = (task) =>{
    setTasks(oldTasks => [...oldTasks, task])
  }

  return (
    <div className="App">
      <Form addTask={addTaskHandler}/>
      {tasks && <TaskList tasks={tasks}/>}
    </div>
  );
}

export default App;
