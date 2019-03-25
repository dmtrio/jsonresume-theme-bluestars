import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Resume from "./components/Resume";
import demetrioResumeJson from "./mock/resume.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeJson: null,
    };
  }
  componentWillMount() {
    this.setState({
      resumeJson: demetrioResumeJson
    })
  }
  render() {
    return (
        <Resume resume={this.state.resumeJson}/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));