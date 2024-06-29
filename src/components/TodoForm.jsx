/* eslint-disable react/prop-types */

import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskDescription) return;

    const newTask = { id: Date.now(), taskDescription, isCompleted: false };

    onAddTask(newTask);

    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="form-input"
      />

      <button className="form-btn">+</button>
    </form>
  );
}

export default TodoForm;
