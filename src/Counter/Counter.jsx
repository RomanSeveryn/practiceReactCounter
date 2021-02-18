import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isAdd: true,
      value: "",
    };
  }

  handleClick = () => {
    this.setState((state) => {
      if (state.isAdd) {
        const newCount = state.counter + Number(state.value);
        return {
          counter: newCount,
        };
      } else if (this.state.counter > 0) {
        const newCount = state.counter - state.value;
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
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { counter, isAdd, value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}> 
        <h1>Текущий счёт: {counter}</h1>
        <h1>Шаг: {value}</h1>
        <button onClick={this.handleClick}>
          {isAdd ? "ДОБАВИТЬ" : "ОТНЯТЬ"}
        </button>
        <button onClick={this.changeMode}>ИЗМЕНИТЬ РЕЖИМ</button>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Counter;
