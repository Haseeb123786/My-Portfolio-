"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: position.x - 55,
          top: position.y - 55,
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,0,0,0.18) 0%, rgba(255,0,0,0.08) 45%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />
      <svg
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: position.x - 18,
          top: position.y - 18,
          width: "36px",
          height: "36px",
        }}
      >
        <defs>
          <linearGradient
            id="cursorGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="50%" stopColor="red" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>

        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="url(#cursorGradient)"
          strokeWidth="4"
        />
      </svg>
    </>
  );
}
