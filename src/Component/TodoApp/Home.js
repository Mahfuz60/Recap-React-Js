import React, { useState } from "react";


import DataFetch from "../UseEffect/DataFetch";
import User from "../UseEffect/User";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const dummyTodos = ["Mahfuz", "Kauser", "Rafsan"];

function Home(props) {
  const [todos, setTodos] = useState(dummyTodos);
  const handleNewTodo = (newTodo) => {
    // console.log(newTodo);
    setTodos([...todos,newTodo]);
  };

  return (
    <div>
      {/* <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} /> */}
      <User/>
      {/* <DataFetch/> */}
    </div>
  );
}

export default Home;
