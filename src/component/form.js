import { useState } from "react";
import shortid from "shortid";
function Form({ onSubmit }) {
  let [todo, setTodo] = useState("");
  let submitFun = (e) => {
    e.preventDefault();
    onSubmit({ id: shortid.generate(), name: todo, complete: false });
    setTodo("");
  };
  return (
    <form onSubmit={submitFun}>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={submitFun}>Add new Todo</button>
    </form>
  );
}
export default Form;
