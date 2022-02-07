import React, { useContext } from "react";
import { RingContext } from "../../../App";

function MySelf(props) {
  const { house } = props;
  const Special = useContext(RingContext);
  // console.log(Special);
  return (
    <div>
      <h1>Me</h1>
      <small>House:{house}</small>
      <p>
        Special:
        <small>{Special}</small>
      </p>
    </div>
  );
}

export default MySelf;
