import { useState } from "react";
import "./taskItem.css";

const TaskItem = ({ task, deleteTask, updateTask, editTask }) => {
  const [isChecked, setIsChecked] = useState(task.isComplete);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);

  const checkboxChangeHandler = (e) => {
    setIsChecked(!isChecked);
    updateTask(task.id);
  };

  const toggleEditTaskHandler = (e) => {
    if (isEditing) {
      editTask(task.id, editedTask);
      setIsEditing(!isEditing);
    } else setIsEditing(!isEditing);
  };

  const updateTaskName = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <li>
      <div className="task">
        <div className="task-text">
          <input
            type="checkbox"
            checked={isChecked}
            name={task.name}
            id={task.id}
            className="check"
            onChange={checkboxChangeHandler}
          />
          {
            isEditing ? (
              <input
                type="text"
                value={editedTask}
                onChange={updateTaskName}
                maxLength={65}
                className="task-edit"
              ></input>
            ) : (
              <label for={task.id} class="label">
                
                <svg width="500" height="50" >
                  <rect
                    x="-60"
                    y="0"
                    width="50"
                    height="50"
                    stroke="black"
                    fill="none"
                  />
                  <g transform="translate(0,-972.36216)">
                    <path
                      d="m -50,1010 c 7,9 16,-43 20,-31 0.19,0.60 -7,35 -5,33 2,-2 26,-33 27,-32 3,3 -18,29 -12,32 12,6 20,-41 30,-31 7,7 -15,37 -6,31 9,-6 13,-22 23,-27 8,-4 -10,34 -2,28 2,-1 26,-28 30,-25 2,2 -11,16 -8,22 1,3 29,-17 29,-20 0,-7 -8,16 -4,23 3,6 21,-25 24,-25 6,0 -5,27 -2,21 4,-9 23,-33 23,-22 0,9 -16,28 -6,28 5,0 17,-14 21,-18 14,-15 11,-12 7,4 -0,3 -1,16 -1,12 0,-9 13,-24 21,-28 0,-0.36 -6,27 -2,28 9,3 26,-22 32,-28 5,-6 -3,29 3,25 5,-3 18,-27 26,-27 0.89,0 -9,22 -5,26 4,4 24,-17 29,-20 3,-1.63 -7,14 -4,18 2,2 16,-19 18,-21 1,-1 -9,24 7,11 4,-3 14,-15 21,-15 1,0 -17,37 -3,24 30,-28 -17,12 9,-10 23,-20 0.90,9 12,7 19,-4 16,-28 16,5 0,7 7,-17 15,-17 1,0 -1,17 -0.96,17 5,-2 14,-19 20,-19 1,0 -3,11 -1,13 5,6.1 19,-24 19,-16 0,1 -5,17 -3,17 1,0 12,-12 12,-11 0.50,2 -1,12 0.96,13 12,4 14,-30 14,-1 "
                      fill="none"
                      stroke="black"
                      class="path2"
                      stroke-width="3"
                    />
                  </g>
                </svg>
                <p className="task-name">{task.name}</p>
              </label>
            )
            // <label htmlFor={task.id} className="task-label">{task.name}</label>
          }
        </div>
        <div className="task-buttons">
          <button onClick={toggleEditTaskHandler}>
            {isEditing ? (
              <i class="fa-solid fa-floppy-disk"></i>
            ) : (
              <i class="fa-solid fa-pen-to-square"></i>
            )}
          </button>

          <button onClick={() => deleteTask(task.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
