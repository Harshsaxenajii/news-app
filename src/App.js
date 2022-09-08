import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";
import BasicExample from "./Components/NewsItem";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
