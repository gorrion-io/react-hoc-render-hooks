import React from "react";

import useWindowWidth from "./useWindowWidth";

const WindowWidth = () => {
  const width = useWindowWidth();
  return (
    <>
      <h1>Custom hook</h1>
      <h2>Window width: {width}</h2>
    </>
  );
};

export default WindowWidth;
