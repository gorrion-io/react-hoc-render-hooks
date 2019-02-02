import React, { Component } from "react";

class WindowWidth extends Component {
  state = {
    width: window.innerWidth,
  };

  handleResize = () => this.setState({ width: window.innerWidth });

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { width } = this.state;
    return (
      <>
        <h1>Class component</h1>
        <h2>Window width: {width}</h2>
      </>
    );
  }
}

export default WindowWidth;
