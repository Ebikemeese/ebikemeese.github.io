import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../assets/css/magneto.css"

type OtherTech = {
  name: string;
  icon: string; // image URL or path
};

interface MagnetoButtonProps {
  othertechs: OtherTech;
}

const MagnetoButton: React.FC<MagnetoButtonProps> = ({ othertechs }) => {
  const magnetoRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const debuggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const magneto = magnetoRef.current;
    const magnetoIcon = iconRef.current;
    const dbgr = debuggerRef.current;

    if (!magneto || !magnetoIcon || !dbgr) return;

    const magnetoStrength = 40;
    const magnetoIconStrength = 80;

    const activateMagneto = (event: MouseEvent) => {
      const boundBox = magneto.getBoundingClientRect();
      const newX =
        (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY =
        (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      dbgr.innerHTML =
        "cursorX: " +
        event.clientX +
        "<br>boxLeft: " +
        Math.ceil(boundBox.left) +
        "<br>cursorInsideButton: " +
        Math.ceil(event.clientX - boundBox.left) +
        "<br>relativeToTotalWidth: " +
        ((event.clientX - boundBox.left) / magneto.offsetWidth).toFixed(2) +
        "<br>shifted: " +
        (
          (event.clientX - boundBox.left) / magneto.offsetWidth -
          0.5
        ).toFixed(2);

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: "power4.out",
      });

      gsap.to(magnetoIcon, {
        duration: 1,
        x: newX * magnetoIconStrength,
        y: newY * magnetoIconStrength,
        ease: "power4.out",
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)",
      });
      gsap.to(magnetoIcon, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)",
      });
    };

    magneto.addEventListener("mousemove", activateMagneto);
    magneto.addEventListener("mouseleave", resetMagneto);

    return () => {
      magneto.removeEventListener("mousemove", activateMagneto);
      magneto.removeEventListener("mouseleave", resetMagneto);
    };
  }, []);

  return (
    <button className="magneto" ref={magnetoRef}>
      <img
        ref={iconRef}
        src={othertechs.icon}
        alt={othertechs.name}
        style={{ width: "4rem", height: "4rem" }}
      />
      <div id="debugger" ref={debuggerRef}></div>
    </button>
  );
};

export default MagnetoButton;
