import React from "react";

function withMousePosition(WrappedComponent, style = {}) {
  return class extends React.Component {
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
          style={style}
          onMouseMove={this.handleMouseMove}
        >
          <WrappedComponent
            {...this.props}
            mouseX={this.state.x}
            mouseY={this.state.y}
          />
        </div>
      );
    }
  };
}

const MouseTracker = ({ mouseX, mouseY }) => (
  <>
    <h1>HOC</h1>
    <h2>Move the mouse around!</h2>
    <p>
      The current mouse position is ({mouseX}, {mouseY})
    </p>
  </>
);

export default withMousePosition(MouseTracker, {
  border: "2px solid red",
});
