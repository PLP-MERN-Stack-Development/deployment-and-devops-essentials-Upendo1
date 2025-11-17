import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const getTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!text) return;
    await API.post("/tasks", { text });
    setText("");
    getTasks();
  };

  const toggleTask = async (id, completed) => {
    await API.patch(`/tasks/${id}`, { completed: !completed });
    getTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div style={{ padding: 30, maxWidth: 400, margin: "0 auto" }}>
      <h1>Task Manager</h1>

      <input
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: 10 }}
      />
      <button onClick={addTask} style={{ width: "100%", marginTop: 10 }}>
        Add Task
      </button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <li key={task._id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
