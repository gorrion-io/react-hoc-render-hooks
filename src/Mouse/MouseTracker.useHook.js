import React, { useRef } from "react";
import useMousePosition from "./useMousePosition";

const MouseTracker = () => {
  // const { x, y } = useMousePosition();
  const divRef = useRef();
  const { x, y } = useMousePosition(divRef);
  return (
    <div
      ref={divRef}
      className="mouse-tracker"
      style={{ border: "2px solid violet" }}
    >
      <h1>Custom Hook</h1>
      <h2>Move the mouse around!</h2>
      <p>
        The current mouse position is ({x}, {y})
      </p>
    </div>
  );
};

export default MouseTracker;
