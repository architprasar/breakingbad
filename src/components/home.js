import React from "react";
import axios from "axios";
import Navbar from "./navbar.js";
import Listcontainer from "./listcontainer.js";
import Footer from "./footer.js";

class home extends React.Component {
  constructor() {
    super();

    this.state = {
      items: null,
      perpage: 10,
      total: null,
      currentpage: 2,
      upperbound: 6,
      lowerbound: 0,
    };
  }

  componentDidMount() {
    const fetchItems = async () => {
      const result = await axios(
        "https://www.breakingbadapi.com/api/characters"
      );
      console.log(result.status);
      this.setState({ items: result.data, total: result.data.length });
    };
    fetchItems();
  }
  goback = (par) => {
    let page =
      this.state.currentpage - par < 0 ? 0 : this.state.currentpage - par;
    this.setState({ currentpage: page });
  };
  goforward = (par) => {
    let page =
      this.state.currentpage + par > 6 ? 6 : this.state.currentpage + par;
    this.setState({ currentpage: page });
  };

  render() {
    if (this.state.items != null) {
      return (
        <div>
          <Navbar symbol="" onclick="" />
          <div className="Main__body">
            <Listcontainer
              pro={this.props}
              items={this.state.items}
              perpage={this.state.perpage}
              total={this.state.total}
              currentpage={this.state.currentpage}
            />
          </div>
          <Footer
            currentpage={this.state.currentpage}
            goforward={this.goforward}
            goback={this.goback}
          />
        </div>
      );
    }
    return <div className="loding">Loading....</div>;
  }
}

export default home;
