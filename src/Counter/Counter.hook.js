import React, { useState, useCallback } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = useCallback(() => {
    setCounterValue(prevCounterValue => prevCounterValue + 1);
  }, [setCounterValue]);

  return (
    <div className="counter-wrapper">
      <h2>Function component with hooks</h2>
      <h3>Counter value: {counterValue}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
