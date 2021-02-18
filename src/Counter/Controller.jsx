import React, { Component } from 'react';
import Counter from './Counter';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "1",
    }
  }

  handleChange = (event) => {
    this.setState(
      { 
        step: event.target.value 
      }
      );
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { step } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Counter step={step}/>
        <input
          type="text"
          value={step}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Controller;
