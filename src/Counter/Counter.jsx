import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + this.props.step });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - this.props.step });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>

        <div>{this.props.step}</div>
        <button>Switch</button>
      </div>
    );
  }
}

export default Counter;
