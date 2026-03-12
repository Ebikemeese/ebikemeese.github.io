import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/css/loader.css";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 5000); // wait 5 seconds

    return () => clearTimeout(timer);
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
      </svg>
    </div>
  );
};

export default Loader;
