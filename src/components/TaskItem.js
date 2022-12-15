import { useState } from "react"


const TaskItem = ({task}) => {
    const [isChecked, setIsChecked] = useState(task.isComplete)

    const checkboxChangeHandler = (e) =>{
        setIsChecked(!isChecked)
    }

  return (
    <li>
        <div className="task">
            <input type="checkbox" checked={isChecked} name={task.name} id={task.id} onChange={checkboxChangeHandler}/>
            <label htmlFor={task.id}>{task.name}</label>          
            <button>Edit</button>
            <button>Delete</button>

        </div>
    </li>
  )
}

export default TaskItem