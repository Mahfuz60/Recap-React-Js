import React from "react";

function Uncle(props) {
  const { house}= props;
  
  return (
    <div className="grandfather">
      <h1>Uncle</h1>
      <small>House:{house}</small>
    </div>
  );
}

export default Uncle;
