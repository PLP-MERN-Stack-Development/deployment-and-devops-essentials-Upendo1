import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import api from "../services/api";

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const res = await api.get("/tasks");
      setTasks(res);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const add = async (data) => {
    const created = await api.post("/tasks", data);
    setTasks((t) => [created, ...t]);
  };

  const update = async (id, data) => {
    const updated = await api.put(`/tasks/${id}`, data);
    setTasks((t) => t.map((x) => (x._id === id ? updated : x)));
    setEditing(null);
  };

  const remove = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks((t) => t.filter((x) => x._id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Task Manager
      </h1>

      {/* Task Form */}
      <TaskForm
        onAdd={add}
        editing={editing}
        onUpdate={update}
        onCancel={() => setEditing(null)}
      />

      <hr className="my-6 border-gray-300" />

      {/* Task List */}
      {loading ? (
        <div className="text-center py-6 text-gray-500">Loading tasks…</div>
      ) : tasks.length === 0 ? (
        <div className="text-center text-gray-500 py-10 text-lg">
          No tasks yet. Add one!
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={setEditing}
          onDelete={remove}
          onToggle={async (task) => {
            await update(task._id, { completed: !task.completed });
          }}
        />
      )}
    </div>
  );
}
