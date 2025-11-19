import React from "react";

export default function TaskList({ tasks = [], onEdit, onDelete, onToggle }) {
  if (!tasks.length)
    return (
      <p className="text-center text-gray-500 py-6 text-lg">
        No tasks yet. Add one!
      </p>
    );

  return (
    <ul className="space-y-3">
      {tasks.map((t) => (
        <li
          key={t._id}
          className="p-4 bg-gray-50 border rounded-lg shadow-sm flex justify-between items-start"
        >
          {/* Left section: checkbox + title + description */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={!!t.completed}
                onChange={() => onToggle(t)}
                className="h-5 w-5 accent-blue-600"
              />

              <span
                className={`text-lg ${
                  t.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {t.title}
              </span>
            </div>

            {t.description && (
              <div className="text-sm text-gray-600 mt-1 ml-7">
                {t.description}
              </div>
            )}
          </div>

          {/* Right section: buttons */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onEdit(t)}
              className="px-3 py-1.5 text-sm bg-yellow-400 hover:bg-yellow-500 text-black rounded-md"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(t._id)}
              className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
