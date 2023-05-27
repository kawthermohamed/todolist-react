import "./styles.css";
import Form from "./component/form";
import "./component/list.css";
import TodoList from "./component/todolist";
import { useState } from "react";
export default function App() {
  let [todos, setTodos] = useState([]);
  let [tasks, setTasks] = useState("all");
  let [iscomplete, setIscomplete] = useState(false);

  const Addtodo = (todo) => {
    setTodos([...todos, todo]);
  };
  //
  const deleteFun = (id) => {
    setTodos(
      todos.filter((ele) => {
        return ele.id !== id;
      })
    );
  };
  let toggleFun = (idx) => {
    setTodos(
      todos.map((element) => {
        if (element.id === idx) {
          return {
            ...element,
            complete: !element.complete
          };
        } else {
          return element;
        }
      })
    );
  };
  const updateFun = (type) => {
    setTasks(type);
  };
  if (tasks === "active") {
    todos = todos.filter((ele) => {
      return ele.complete === false;
    });
  } else if (tasks === "complete") {
    todos = todos.filter((ele) => {
      return ele.complete === true;
    });
  }
  const toggletodos = () => {
    setTodos(
      todos.map((ele) => {
        return { ...ele, complete: iscomplete };
      })
    );
    setIscomplete(!iscomplete);
  };
  const removeAllTodosThatAreComplete = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.complete === false;
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onSubmit={Addtodo} />
      <ul className="todo-list">
        {todos.map((e) => {
          return (
            <TodoList
              todo={e}
              likey={e.id}
              deletetodo={() => {
                deleteFun(e.id);
              }}
              togglecomplete={() => {
                toggleFun(e.id);
              }}
            />
          );
        })}
      </ul>
      <div className="options">
        <button
          className="all"
          onClick={() => {
            updateFun("all");
          }}
        >
          All
        </button>
        <button
          className="active"
          onClick={() => {
            updateFun("active");
          }}
        >
          Active
        </button>
        <button
          className="complete"
          onClick={() => {
            updateFun("complete");
          }}
        >
          Complete
        </button>
      </div>
      <button onClick={toggletodos}>
        toggle All todos : {`${iscomplete}`}
      </button>
      {todos.some((todo) => todo.complete) ? (
        <button className="all-btn btn" onClick={removeAllTodosThatAreComplete}>
          Remove all complete todos
        </button>
      ) : null}
    </div>
  );
}
