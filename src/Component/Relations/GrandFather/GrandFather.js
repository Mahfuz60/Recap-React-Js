import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

function GrandFather(props) {
  const { house } = props;
  return (
    <div className="grandfather">
      <div className=" text-center">
        <h1>GrandFather</h1>
        <small>House:{house}</small>
      </div>
      <div className="d-flex ">
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </div>
    </div>
  );
}

export default GrandFather;
