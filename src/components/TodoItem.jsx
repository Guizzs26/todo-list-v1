/* eslint-disable react/prop-types */

function TodoItem({
  todo: { id, todoDescription, isCompleted },
  onRemoveTodo,
  onToggleTodo,
}) {
  return (
    <li className="todo-item">
      <div className="left-box">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggleTodo(id)}
        />

        <span className={`item-description ${isCompleted ? "completed" : ""}`}>
          {todoDescription}
        </span>
      </div>

      <button onClick={() => onRemoveTodo(id)} className="remove-btn">
        &times;
      </button>

      {/* <hr className="item-separator" /> */}
    </li>
  );
}

export default TodoItem;
