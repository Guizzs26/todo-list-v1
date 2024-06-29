/* eslint-disable react/prop-types */

import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [todoDescription, setTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoDescription) return;

    const newTodo = { id: Date.now(), todoDescription, isCompleted: false };

    onAddTodo(newTodo);

    setTodoDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add new task"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        className="form-input"
      />

      <button className="form-btn">+</button>
    </form>
  );
}

export default TodoForm;
