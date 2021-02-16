import React, { Component } from "react";
import "../index.css"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Search for an employee or click Name to sort Alphabetically. 
        </p>
      </div>
    );
  }
}
