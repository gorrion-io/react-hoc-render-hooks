import React from "react";

class MousePositionProvider extends React.Component {
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
        style={this.props.style}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.children(this.state.x, this.state.y)}
      </div>
    );
  }
}

const MouseTracker = () => (
  <MousePositionProvider style={{ border: "2px solid green" }}>
    {(mouseX, mouseY) => (
      <>
        <h1>Render props</h1>
        <h2>Move the mouse around!</h2>
        <p>
          The current mouse position is ({mouseX}, {mouseY})
        </p>
      </>
    )}
  </MousePositionProvider>
);

export default MouseTracker;
