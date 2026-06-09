"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x - 18,
        top: position.y - 18,
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        border: "4px solid rgba(255,255,255,0.9)",
        boxShadow:
          "0 0 12px rgba(255,0,0,0.25), 0 0 24px rgba(255,0,0,0.12)",
      }}
    />
  );
}