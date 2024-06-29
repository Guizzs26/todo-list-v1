/* eslint-disable react/prop-types */

function TodoItem({
  todo: { id, todoDescription, isCompleted },
  onRemoveTodo,
}) {
  return (
    <li>
      <input type="checkbox" />

      <span>{todoDescription}</span>

      <button onClick={() => onRemoveTodo(id)} className="remove-btn">
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
