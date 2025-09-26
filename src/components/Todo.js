import "./styles.css";
function Todo(props) {
  const todoItems = props.todoItems;
  const deleteTodo = props.deleteTodo;
  // console.log("the",todoItems)

  return (
    <div className="todo-items">
      {todoItems.map((item, index) => (
        <div key={index} className="todo">
          <li className="todo-list">{item}</li>
          <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}
export default Todo;
