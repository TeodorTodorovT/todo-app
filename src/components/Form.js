import { useState } from "react";

const Form = ({addTask}) => {

  const [task, setTask] = useState('')

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      isComplete: false,
      id: Math.round(Date.now() * (Math.random() * 10))
    })
    setTask('');
  }

  const currentTaskHandler = (e) => {
    setTask(e.target.value)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="task">Task:</label>
      <input 
        type="text" 
        name="" 
        id="task" 
        required
        maxLength={65}
        placeholder="Enter task"
        value={task}
        onChange={currentTaskHandler}
      />
      <button>Add Task</button>
    </form>
  )
}

export default Form