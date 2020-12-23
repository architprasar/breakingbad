import React from "react";
import ListC from "./listcomponent.js";

class listcontainer extends React.Component {
  render() {
    let list = new Array();
    for (
      let i = this.props.perpage * this.props.currentpage, x = 0;
      x < 10;
      i++, x++
    ) {
      if (i === 63) {
        break;
      }
      list[x] = (
        <ListC
          pro={this.props.pro}
          key={this.props.items[i].char_id}
          charid={this.props.items[i].char_id}
          name={this.props.items[i].name}
          dob={this.props.items[i].birthday}
          status={this.props.items[i].status}
          occupation={this.props.items[i].occupation}
        />
      );
    }

    return <div className="List__container">{list}</div>;
  }
}

export default listcontainer;
