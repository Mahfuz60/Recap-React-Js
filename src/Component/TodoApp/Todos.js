import React from "react";
import Todo from "./Todo";

function Todos(props) {
  // console.log(props.todos);
  const todoList = props.todos;
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo, index) => (
        <Todo todo={todo} key={index}/>
      ))}
    </div>
  );
}

export default Todos;
