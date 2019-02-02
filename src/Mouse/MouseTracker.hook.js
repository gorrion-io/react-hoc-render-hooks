import React, { useState } from "react";

const MouseTracker = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="mouse-tracker"
      style={{ border: "2px solid black" }}
      onMouseMove={handleMouseMove}
    >
      <h1>Manual hook</h1>
      <h2>Move the mouse around!</h2>
      <p>
        The current mouse position is ({x}, {y})
      </p>
    </div>
  );
};

export default MouseTracker;
