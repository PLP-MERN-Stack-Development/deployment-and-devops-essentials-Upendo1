<<<<<<< HEAD
import { useState } from 'react';
import './TaskManager.css';
=======
import { useState } from 'react'
import './TaskManager.css'
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac

function TaskManager() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build Task Manager",
    "Test Frontend"
<<<<<<< HEAD
  ]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text) return;
    setTasks([...tasks, text]);
    setText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index && task.includes('✅') ? task.replace('✅ ', '') : i === index ? `✅ ${task}` : task
    ));
  };

  return (
    <div className="task-manager-container">
      {/* <h1>Task Manager</h1> */}

      <div className="add-task-card">
        <input
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tasks-grid">
        {tasks.map((task, index) => (
          <div key={index} className={`task-card ${task.includes('✅') ? 'completed' : ''}`}>
            <span onClick={() => toggleTask(index)}>{task}</span>
            <button onClick={() => deleteTask(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;
=======
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
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
