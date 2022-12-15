import { useState } from "react"


const TaskItem = ({task, deleteTask, updateTask, editTask}) => {
    const [isChecked, setIsChecked] = useState(task.isComplete)
    const [isEditing, setIsEditing] = useState(false)
    const [editedTask, setEditedTask] = useState(task.name)

    const checkboxChangeHandler = (e) =>{
        setIsChecked(!isChecked)
        updateTask(task.id)
    }

    const toggleEditTaskHandler = (e) =>{
        if(isEditing){
            editTask(task.id, editedTask)
            setIsEditing(!isEditing)
        }else setIsEditing(!isEditing)
        
    }
    
    const updateTaskName = (e) =>{
        setEditedTask(e.target.value)
    }



  return (
    <li>
        <div className="task">
            <input type="checkbox" checked={isChecked} name={task.name} id={task.id} onChange={checkboxChangeHandler}/>
            {
                isEditing 
                ? <input type="text" value={editedTask} onChange={updateTaskName}></input>
                : <label htmlFor={task.id}>{task.name}</label>  
            }
            
            
            <button onClick={toggleEditTaskHandler}>{isEditing ? "Save" : "Edit"}</button>
            
            <button onClick={() => deleteTask(task.id) }>Delete</button>

        </div>
    </li>
  )
}

export default TaskItem