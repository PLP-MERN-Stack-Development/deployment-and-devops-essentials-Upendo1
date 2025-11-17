import { useState } from 'react'
import './TaskManager.css'

function TaskManager() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build Task Manager",
    "Test Frontend"
  ])

  return (
    <div className="task-manager">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManager
