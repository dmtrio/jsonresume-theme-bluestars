import ReactDOM from 'react-dom';
import React, { Component } from "react";
import ReactColorSquare from "./index.js";

class App extends Component {
  render() {
    return (
        <ReactColorSquare height={150} color="red" text="Hello World!" />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));