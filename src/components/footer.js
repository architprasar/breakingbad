import React from "react";

const footer = (props) => {
  return (
    <div>
      <div className="footer">
        <div
          className="btn"
          onClick={() => {
            props.goback(1);
          }}
        >
          PRE
        </div>
        <div
          className="btn"
          onClick={() => {
            props.goback(1);
          }}
        >
          {props.currentpage === 0 ? "" : props.currentpage}
        </div>
        <div className="btn active">{props.currentpage + 1}</div>
        <div
          className="btn"
          className="btn"
          onClick={() => {
            props.goforward(1);
          }}
        >
          {props.currentpage + 2 === 8 ? "" : props.currentpage + 2}
        </div>
        <div
          className="btn"
          onClick={() => {
            props.goforward(1);
          }}
        >
          NEXT
        </div>
      </div>
      <div className="footerblur"></div>
    </div>
  );
};

export default footer;
