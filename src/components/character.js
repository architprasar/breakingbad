import React from "react";
import axios from "axios";
import Navbar from "./navbar.js";
import navbar from "./navbar.js";
class character extends React.Component {
  constructor(props) {
    super(props);

    this.state = { character: null, quotes: null };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const fetchItems = async () => {
      const result = await axios(
        "https://www.breakingbadapi.com/api/characters/" + id
      );
      console.log(result.status);
      this.setState({ character: result.data[0] });
      const quotes = await axios(
        "https://www.breakingbadapi.com/api/quote?author=" + result.data[0].name
      );
      this.setState({ quotes: quotes.data });
    };
    fetchItems();
  }

  render() {
    let nickname;
    let quote;
    let appearance;

    if (this.state.character != null && this.state.quotes != null) {
      if (this.state.character.nickname) {
        nickname = (
          <div className="blocks">
            <b>Nickname:&nbsp;</b>
            {this.state.character.nickname}
          </div>
        );
      }
      if (this.state.quotes[0] != null) {
        quote = (
          <div>
            <div className="bar">
              <b>Quotes By the character:</b>
            </div>

            {this.state.quotes.map((quote) => {
              return (
                <div className="quote" key={quote.quote_id}>
                  {quote.quote}
                </div>
              );
            })}
          </div>
        );
      }
      if (this.state.character.appearance != null) {
        appearance = (
          <div className="bar">
            <b>Appered in season:&nbsp;</b>
            {this.state.character.appearance.map((p, index) => {
              return <em key="index">{p}&nbsp;</em>;
            })}
          </div>
        );
      }
      return (
        <div>
          <Navbar
            onclick={() => {
              this.props.history.push("/");
            }}
            symbol="&#10006;"
          />
          <div className="character_body">
            <div className="head">
              <div className="left">
                <img src={this.state.character.img} />
              </div>
              <div className="right">
                <div className="blocks names">{this.state.character.name}</div>
                <div className="blocks names">
                  <b>Born:&nbsp;</b>
                  {this.state.character.birthday}
                </div>
                <div className="blocks occupations">
                  <b>Occupation:&nbsp;</b>
                  {this.state.character.occupation.map((p, index) => {
                    return (
                      <p key={index}>
                        <li>{p}</li>
                      </p>
                    );
                  })}
                </div>
                {nickname}
              </div>
            </div>
            <div className="bar">
              <b>Status:&nbsp;</b>
              {this.state.character.status}
            </div>
            <div className="bar">
              <b>Portrayed by:&nbsp;</b>
              {this.state.character.portrayed}
            </div>
            {appearance}
            {quote}
          </div>
        </div>
      );
    }

    return <div className="loading">Loading...</div>;
  }
}

export default character;
