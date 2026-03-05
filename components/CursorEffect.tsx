"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [role='button'], input, textarea, select")
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  // Hide on touch devices
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/40"
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          width: 8,
          height: 8,
          opacity: visible ? 1 : 0,
          scale: clicking ? 1.8 : hovering ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 28, stiffness: 400, mass: 0.3 }}
      />
      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(160 84% 50% / 0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: pos.x - 60,
          y: pos.y - 60,
          width: 120,
          height: 120,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
      />
    </>
  );
};

export default CursorEffect;
