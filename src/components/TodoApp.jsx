import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoLogo from "./TodoLogo";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <TodoLogo />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default TodoApp;
