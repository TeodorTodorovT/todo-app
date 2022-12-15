import { useState } from "react";
import Form from "./components/Form";


function App() {
  const [tasks, setTasks] = useState([])

  const addTaskHandler = (task) =>{
    setTasks(oldTasks => [...oldTasks, task])
  }

  return (
    <div className="App">
      <Form addTask={addTaskHandler}/>
    </div>
  );
}

export default App;
