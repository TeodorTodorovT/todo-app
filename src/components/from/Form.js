import { useState } from "react";
import "./form.css"

const Form = ({addTask}) => {

  const [task, setTask] = useState('')

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      isComplete: false,
      id: Math.round(Date.now() + (Math.random() * 100))
    })
    setTask('');
  }

  const currentTaskHandler = (e) => {
    setTask(e.target.value)
  }

  return (
    <div className="formWrapper">
    <form onSubmit={formSubmitHandler}>
      <input 
        type="text" 
        name="" 
        id="task" 
        required
        maxLength={65}
        value={task}
        onChange={currentTaskHandler}
        placeholder="Enter a task"
      />
      <button><i class="fa-solid fa-plus"></i></button>      
    </form>
    </div>
  )
}

export default Form