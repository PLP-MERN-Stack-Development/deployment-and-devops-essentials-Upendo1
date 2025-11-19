import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title });
    setTitle("");
    fetchTasks();
  };

  const updateTask = async (task) => {
    await axios.put(`${API_URL}/${task._id}`, { title });
    setEditing(null);
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter task..."
          className="flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {editing ? (
          <button onClick={() => updateTask(editing)}>Update</button>
        ) : (
          <button onClick={addTask}>Add</button>
        )}
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-gray-100 p-3 rounded flex justify-between items-center"
          >
            <span>{task.title}</span>

            <div className="flex gap-2">
              <button
                className="bg-yellow-500 hover:bg-yellow-600"
                onClick={() => {
                  setEditing(task);
                  setTitle(task.title);
                }}
              >
                Edit
              </button>

              <button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
