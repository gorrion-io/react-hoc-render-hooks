import React, { useState, useEffect } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <>
      <h1>Inline hook</h1>
      <h2>Window width: {width}</h2>
    </>
  );
};

export default WindowWidth;
