import { useState, useEffect, useCallback } from "react";

export default function useMousePosition(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(event => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        ref.current.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      document.body.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [ref]);

  return position;
}
