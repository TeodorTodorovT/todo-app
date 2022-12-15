import { useState } from "react"


const TaskItem = ({task, deleteTask, updateTask}) => {
    const [isChecked, setIsChecked] = useState(task.isComplete)

    const checkboxChangeHandler = (e) =>{
        setIsChecked(!isChecked)
        updateTask(task.id)
    }

  return (
    <li>
        <div className="task">
            <input type="checkbox" checked={isChecked} name={task.name} id={task.id} onChange={checkboxChangeHandler}/>
            <label htmlFor={task.id}>{task.name}</label>          
            <button>Edit</button>
            <button onClick={() => deleteTask(task.id) }>Delete</button>

        </div>
    </li>
  )
}

export default TaskItem