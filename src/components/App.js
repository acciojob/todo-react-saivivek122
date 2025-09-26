
import React, {useState} from "react";
import Todo from "./Todo";
import './../styles/App.css'; 

const App = () => {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  const [message,setMessage]=useState("")

  function handleTodo(event) {
    // console.log(event.target.value);
    setTodo(event.target.value);
  }
  function handleSubmit() {
    if(!todo) {
      setMessage("Enter Todo");
      return
    }
    setAddTodo([...addTodo, todo]);
    // console.log("from", addTodo);
    setTodo("");
    setMessage("")
  }
  function deleteTodo(item) {
    console.log(item);
    let filteredTodo = addTodo.filter((data, index) => index != item);
    setAddTodo(filteredTodo);
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <div className="container">
      <h1>To-Do-List</h1>
      <div className="todo-container">
        <input onChange={handleTodo} value={todo} className="input" />
        <button onClick={handleSubmit} className="button">
          Add Todo
        </button>
      </div>
      <p>{message}</p>
      <Todo todoItems={addTodo} deleteTodo={deleteTodo} />
    </div>
    </div>
  )
}

export default App
