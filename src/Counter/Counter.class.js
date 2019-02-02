import React, { Component } from "react";

class Counter extends Component {
  state = {
    counterValue: 0,
  };

  increment = () => {
    this.setState(state => ({ counterValue: state.counterValue + 1 }));
  };

  render() {
    const { counterValue } = this.state;
    const increment = this.increment;
    return (
      <div className="counter-wrapper">
        <h2>Class component</h2>
        <h3>Counter value: {counterValue}</h3>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
