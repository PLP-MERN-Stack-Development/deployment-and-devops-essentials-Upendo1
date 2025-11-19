import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const getTasks = async () => {
<<<<<<< HEAD
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch tasks");
    }
=======
    const res = await API.get("/tasks");
    setTasks(res.data);
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
  };

  const addTask = async () => {
    if (!text) return;
<<<<<<< HEAD
    try {
      await API.post("/tasks", { text });
      setText("");
      getTasks();
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await API.patch(`/tasks/${id}`, { completed: !completed });
      getTasks();
    } catch (err) {
      console.error(err);
      alert("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      getTasks();
    } catch (err) {
      console.error(err);
      alert("Failed to delete task");
    }
=======
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
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
  };

  useEffect(() => {
    getTasks();
  }, []);

<<<<<<< HEAD
  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const taskItemStyle = (completed) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    marginBottom: "10px",
    cursor: "pointer",
    textDecoration: completed ? "line-through" : "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  });

  const deleteButtonStyle = {
    backgroundColor: "#ff4d4d",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "50px auto",
        padding: 30,
        border: "1px solid #eee",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Task Manager</h1>
=======
  return (
    <div style={{ padding: 30, maxWidth: 400, margin: "0 auto" }}>
      <h1>Task Manager</h1>
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac

      <input
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
<<<<<<< HEAD
        style={inputStyle}
      />
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
        onClick={addTask}
      >
        Add Task
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {tasks.map((task) => (
          <li key={task._id} style={taskItemStyle(task.completed)}>
            <span onClick={() => toggleTask(task._id, task.completed)}>{task.text}</span>
            <button
              style={deleteButtonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e60000")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4d")}
              onClick={() => deleteTask(task._id)}
            >
              X
            </button>
=======
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
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
          </li>
        ))}
      </ul>
    </div>
  );
}
