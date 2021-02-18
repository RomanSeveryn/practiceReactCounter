import React, { Component } from "react";
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isAdd: true,
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      if (state.isAdd) {
        const newCount = state.counter + Number(props.step);
        return {
          counter: newCount,
        };
      } else if (this.state.counter > 0) {
        const newCount = state.counter - props.step;
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


  render() {
    const { counter, isAdd } = this.state;
    const { step } = this.props;
    return (
      <>
        <h1>Текущий счёт: {counter}</h1>
        <h1>Шаг: {step}</h1>
        <button onClick={this.handleClick}>
          {isAdd ? "ДОБАВИТЬ" : "ОТНЯТЬ"}
        </button>
        <button onClick={this.changeMode}>ИЗМЕНИТЬ РЕЖИМ</button>
      </>
    );
  }
}


Counter.propTypes = {
  step: PropTypes.number,
}

export default Counter;
