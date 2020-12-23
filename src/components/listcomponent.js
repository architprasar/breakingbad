import React from "react";
import { Link } from "react-router-dom";
const Listcomponent = (props) => {
  return (
    <div className="list__component__container">
      <div className="List__component">
        <div
          className="Data_container"
          onClick={() => {
            props.pro.history.push("/character/" + props.charid);
          }}
        >
          <div className="name">{props.name}</div>
          <div className="dob">{props.dob}</div>
          <div className="status">{props.status}</div>
          <div className="occupation">
            {props.occupation.map((p, index) => {
              return index === 0 ? p : ", " + p;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listcomponent;
