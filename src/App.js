import React from "react";

import CounterClass from "./Counter/Counter.class";
import CounterHook from "./Counter/Counter.hook";
import MouseTrackerClass from "./Mouse/MouseTracker.class";
import MouseTrackerHOC from "./Mouse/MouseTracker.hoc";
import MouseTrackerRender from "./Mouse/MouseTracker.render";
import MouseTrackerHook from "./Mouse/MouseTracker.hook";
import MouseTrackerUseHook from "./Mouse/MouseTracker.useHook";
import WindowWidthClass from "./Width/WindowWidth.class";
import WindowWidthHook from "./Width/WindowWidth.hook";
import WindowWidthUseHook from "./Width/WindowWidth.useHook";
import FetchClass from "./Fetch/Fetch.class";
import FetchHook from "./Fetch/Fetch.hook";

const App = () => {
  const search = new URLSearchParams(window.location.search);
  const showCounters = search.get("counters") != null;
  const showTrackers = search.get("trackers") != null;
  const showWidth = search.get("width") != null;
  const showFetch = search.get("fetch") != null;

  return (
    <>
      {showWidth && (
        <div className="widths">
          <WindowWidthClass />
          <WindowWidthHook />
          <WindowWidthUseHook />
        </div>
      )}
      {showCounters && (
        <div className="counters">
          <CounterClass />
          <CounterHook />
        </div>
      )}
      {showTrackers && (
        <div className="mouse-trackers">
          <MouseTrackerClass />
          <MouseTrackerHOC />
          <MouseTrackerRender />
          <MouseTrackerHook />
          <MouseTrackerUseHook />
        </div>
      )}
      {showFetch && (
        <div className="fetch">
          <FetchClass />
          <FetchHook />
        </div>
      )}
    </>
  );
};

export default App;
