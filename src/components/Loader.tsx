import { forwardRef } from "react";
import "../assets/css/loader.css";

const Loader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="loader-container">
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
        ></text>
      </svg>
    </div>
  );
});

export default Loader;
