import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text" | "click">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch screens or small viewports
    const checkMobile = () => {
      if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseDown = () => {
      setCursorVariant("click");
    };

    const onMouseUp = () => {
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Dynamic element detection for interactive hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [data-cursor='pointer'], .magneto, .service-card, .project-card, input, textarea");
      const textEl = target.closest("p, h1, h2, h3, span");

      if (interactiveEl) {
        setCursorVariant("hover");
      } else if (textEl && !interactiveEl) {
        setCursorVariant("text");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
      backgroundColor: "#cbacf9",
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.5,
      backgroundColor: "#06b6d4",
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.8,
      backgroundColor: "#ec4899",
    },
    click: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
      backgroundColor: "#3b82f6",
    },
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      borderColor: "rgba(203, 172, 249, 0.4)",
      backgroundColor: "rgba(203, 172, 249, 0.05)",
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.8,
      borderColor: "rgba(6, 182, 212, 0.8)",
      backgroundColor: "rgba(6, 182, 212, 0.15)",
    },
    text: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      borderColor: "rgba(236, 72, 153, 0.5)",
      backgroundColor: "rgba(236, 72, 153, 0.08)",
    },
    click: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 0.9,
      borderColor: "rgba(59, 130, 246, 0.9)",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
    },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 backdrop-blur-[1px]"
        variants={ringVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
      />
      {/* Center Fluid Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_12px_rgba(203,172,249,0.8)]"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
};

export default CustomCursor;
