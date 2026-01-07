// src/components/Loader.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/css/loader.css";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      // Animate loader sliding up
      gsap.to(loaderRef.current, {
        y: "-100%",       // slide up off screen
        opacity: 0,       // fade out
        duration: 1,      // 1 second animation
        ease: "power3.inOut",
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = "none"; // remove from flow
          }
        }
      });
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div ref={loaderRef} className="loader-container">
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="text-body"
        >
          Welcome
        </text>
        <text
          x="50%"
          y="50%"
          dy=".32em"
          dx="1.7em"
          textAnchor="middle"
          className="dot"
        >
          
        </text>
      </svg>
    </div>
  );
};

export default Loader;
