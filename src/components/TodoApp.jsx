import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div className="app-container">
      <TodoForm onAddTodo={handleAddTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
