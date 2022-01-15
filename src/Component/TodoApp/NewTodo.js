import React, { useState } from "react";

function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const handleOnChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(todo);
    props.onTodo(todo);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">NewTodo:</label>
          <input
            type="text"
            name="todo"
            id="todo "
            value={todo}
            onChange={handleOnChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </>
  );
}

export default NewTodo;
