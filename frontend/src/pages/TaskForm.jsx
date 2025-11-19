import React, { useEffect, useState } from "react";

export default function TaskForm({ onAdd, editing, onUpdate, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title || "");
      setDescription(editing.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();

    if (editing) {
      onUpdate(editing._id, { title, description });
    } else {
      onAdd({ title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-sm border"
    >
      {/* Title Input */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Description Input */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Description (optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a short description..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={3}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end">
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          {editing ? "Update Task" : "Add Task"}
        </button>

        {editing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
