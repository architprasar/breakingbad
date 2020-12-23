import React from "react";

import white from "./babr.png";
const navbar = (props) => {
  return (
    <div>
      <div className="Top__nav">
        <div className="Nav__title">
          <div className="img">
            <img src={white} />
          </div>
        </div>
  <div className="Nav__search" onClick={props.onclick}>{props.symbol}</div>
      </div>
      <div className="Top__nav__blur"></div>
    </div>
  );
};

export default navbar;
