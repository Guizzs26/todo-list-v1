/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo, onToggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;
