import React, { useState, useEffect } from "react";

function DataFetch() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        // console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo, id) => (
        <p key={id}>{todo.title}</p>
      ))}
    </div>
  );
}

export default DataFetch;
