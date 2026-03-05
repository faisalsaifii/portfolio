"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface HoverTarget {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
}

const CursorEffect = () => {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hoverTarget, setHoverTarget] = useState<HoverTarget | null>(null);
  const rafRef = useRef<number>(0);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 380, mass: 0.45 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const blobX = useSpring(mouseX, { damping: 22, stiffness: 280, mass: 0.5 });
  const blobY = useSpring(mouseY, { damping: 22, stiffness: 280, mass: 0.5 });
  const blobW = useSpring(30, { damping: 24, stiffness: 300, mass: 0.4 });
  const blobH = useSpring(30, { damping: 24, stiffness: 300, mass: 0.4 });
  const blobRadius = useSpring(10, { damping: 24, stiffness: 300, mass: 0.4 });

  const resetBlob = useCallback(
    (cx: number, cy: number) => {
      mouseX.set(cx);
      mouseY.set(cy);
      setHoverTarget(null);
      blobX.set(cx);
      blobY.set(cy);
      blobW.set(20);
      blobH.set(20);
      blobRadius.set(10);
    },
    [mouseX, mouseY, blobX, blobY, blobW, blobH, blobRadius]
  );

  const updateFromPosition = useCallback(
    (clientX: number, clientY: number) => {
      const elUnder = document.elementFromPoint(
        clientX,
        clientY
      ) as HTMLElement | null;
      const el = elUnder?.closest(
        "a, button, [role='button'], input, textarea, select, [data-hoverable]"
      ) as HTMLElement | null;

      if (el) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        const br = parseFloat(style.borderRadius) || 12;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const pullStrength = 0.35;
        const magX = clientX + (centerX - clientX) * pullStrength;
        const magY = clientY + (centerY - clientY) * pullStrength;

        mouseX.set(magX);
        mouseY.set(magY);

        const pad = 8;
        setHoverTarget({
          x: rect.left - pad,
          y: rect.top - pad,
          width: rect.width + pad * 2,
          height: rect.height + pad * 2,
          radius: br + 4,
        });

        blobX.set(rect.left - pad + (rect.width + pad * 2) / 2);
        blobY.set(rect.top - pad + (rect.height + pad * 2) / 2);
        blobW.set(rect.width + pad * 2);
        blobH.set(rect.height + pad * 2);
        blobRadius.set(br + 4);
      } else {
        resetBlob(clientX, clientY);
      }
    },
    [mouseX, mouseY, blobX, blobY, blobW, blobH, blobRadius, resetBlob]
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      updateFromPosition(e.clientX, e.clientY);
    };
    const onScroll = () => {
      if (visible) {
        updateFromPosition(lastMousePos.current.x, lastMousePos.current.y);
      }
    };
    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateFromPosition, visible]);

  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  if (isTouch) return null;

  const isHovering = !!hoverTarget;

  return (
    <>
      {/* Morphing blob - becomes the highlight behind hovered elements */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: blobX,
          y: blobY,
          width: blobW,
          height: blobH,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: blobRadius,
          opacity: visible ? undefined : 0,
          background: "hsl(var(--primary) / 0.07)",
          mixBlendMode: "screen",
        }}
      />

      {/* Small dot cursor - visible only when NOT hovering */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: "hsl(var(--foreground))",
        }}
        animate={{
          width: isHovering ? 0 : clicking ? 8 : 12,
          height: isHovering ? 0 : clicking ? 8 : 12,
          opacity: visible ? (isHovering ? 0 : 1) : 0,
          scale: clicking && !isHovering ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />
    </>
  );
};

export default CursorEffect;
