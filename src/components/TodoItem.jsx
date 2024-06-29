/* eslint-disable react/prop-types */

function TodoItem({
  todo: { id, todoDescription, isCompleted },
  onRemoveTodo,
  onToggleTodo,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={isCompleted}
        onChange={() => onToggleTodo(id)}
      />

      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {todoDescription}
      </span>

      <button onClick={() => onRemoveTodo(id)} className="remove-btn">
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
