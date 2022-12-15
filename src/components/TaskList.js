import TaskItem from "./TaskItem"


const TaskList = ({tasks, deleteTask}) => {
  return (
    <ul>
        {tasks.sort((a, b) => b.id - a.id ).map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task}
                    deleteTask={deleteTask}
                />
            )
        )}
    </ul>
  )
}

export default TaskList