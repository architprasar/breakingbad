import React from "react";
import Home from "./components/home.js";
import Character from "./components/character.js";
import "./components/index.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/character/:id" exact component={Character} />
    </Router>
  );
}

export default App;
