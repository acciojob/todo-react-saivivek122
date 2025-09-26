import React from "react"
import './../styles/App.css';
function Todo(props) {
  const todoItems = props.todoItems;
  const deleteTodo = props.deleteTodo;
  // console.log("the",todoItems)

  return (
    <div className="todo-items">
    <ul>
      {todoItems.map((item, index) => (
        <div key={index} className="todo">
          <li className="todo-list">{item}</li>
          <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
        </div>
      ))}
        </ul>
    </div>
  );
}
export default Todo;
