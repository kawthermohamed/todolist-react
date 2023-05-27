import "./list.css";
function TodoList({ todo, likey, deletetodo, togglecomplete }) {
  return (
    <li key={likey} className="list-item">
      <input type="checkbox" onClick={togglecomplete} />
      <div
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        className="todo-name"
      >
        {" "}
        {todo.name}
      </div>{" "}
      <button className="delete" onClick={deletetodo}>
        x
      </button>
    </li>
  );
}
export default TodoList;
