import React from "react";

class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div
        className="mouse-tracker"
        style={{ border: "2px solid blue" }}
        onMouseMove={this.handleMouseMove}
      >
        <h1>Normal class</h1>
        <h2>Move the mouse around!</h2>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

export default MouseTracker;
