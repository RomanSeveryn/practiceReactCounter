import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isAdd: true,
      step: "",
    };
  }

  handleClick = () => {
    this.setState((state) => {
      if (state.isAdd) {
        const newCount = state.counter + Number(state.step);
        return {
          counter: newCount,
        };
      } else if (this.state.counter > 0) {
        const newCount = state.counter - state.step;
        return {
          counter: newCount,
        };
      }
    });
  };

  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  };

  handleChange = (event) => {
    this.setState({ step: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { counter, isAdd, step } = this.state;

    return (
      <form onSubmit={this.handleSubmit}> 
        <h1>Текущий счёт: {counter}</h1>
        <h1>Шаг: {step}</h1>
        <button onClick={this.handleClick}>
          {isAdd ? "ДОБАВИТЬ" : "ОТНЯТЬ"}
        </button>
        <button onClick={this.changeMode}>ИЗМЕНИТЬ РЕЖИМ</button>
        <input
          type="text"
          value={step}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Counter;
