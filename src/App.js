import "./App.css";
import React from "react";
import { Button } from "./Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  click = (val) => {
    this.setState({ count: this.state.count + val });
  };
  render() {
    return (
      <div className="App">
        <h1> Count = {this.state.count}</h1>
        <hr></hr>
        <Button sign="+" updateCount={this.click} />
        <Button sign="-" updateCount={this.click} />
        <Button
          sign="Reset"
          count={this.state.count}
          updateCount={this.click}
        ></Button>
      </div>
    );
  }
}

export default App;
