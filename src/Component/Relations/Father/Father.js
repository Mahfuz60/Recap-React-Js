import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

function Father(props) {
  const { house } = props;
  return (
    <div className="grandfather">
      <h1>Father</h1>
      <small>House:{house}</small>
      <div className="grandfather d-flex">
        <MySelf house={house} />
        <Brother />
        <Sister />
      </div>
    </div>
  );
}

export default Father;
