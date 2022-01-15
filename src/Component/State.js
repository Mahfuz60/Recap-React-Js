import React, { useState } from "react";
import "./state.css";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button className="buttonStyle" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        className="buttonStyle"
        onClick={() => setCount(count - 1)}
        disabled={count === 0 ? true : false}
      >
        Decrement
      </button>
    </div>
  );
}

export default State;
