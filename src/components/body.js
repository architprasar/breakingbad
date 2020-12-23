import React from "react";
import Listcontainer from "./listcontainer.js";
class body extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return <div className="Main__body">hello</div>;
  }
}

export default body;
