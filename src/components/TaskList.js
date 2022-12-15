import TaskItem from "./TaskItem"


const TaskList = ({tasks, deleteTask, updateTask}) => {
  return (
    <ul>
        {tasks.sort((a, b) => b.id - a.id ).map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
            )
        )}
    </ul>
  )
}

export default TaskList