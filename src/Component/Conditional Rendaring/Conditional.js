import React, { useState } from "react";
import User from "./User";

function Conditional(props) {
  const [familiars, setFamiliars] = useState(false);
  return (
    <div className="container text-center">
      <h2>Is Familiar:{familiars.toString()}</h2>
      <button onClick={() => setFamiliars(!familiars)}>Toggle Friend</button>
      <User familiars={familiars}></User>
    </div>
  );
}

export default Conditional;
