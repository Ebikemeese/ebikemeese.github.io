import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react"; // 👈 correct type

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<LenisRef | null>(null); // 👈 use LenisRef

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000); // 👈 safe access
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      gsap.fromTo(
        pageRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <Router basename="/">
      <Loader />
      <div ref={pageRef} style={{ opacity: 0 }}>
        <ReactLenis 
          root 
          options={{ 
            autoRaf: false,
            duration: 2,
          }} 
          ref={lenisRef} 
        />
        <div className="sticky top-0 left-0 w-full z-50 bg-[#252838] shadow-md">
          <Navbar />
        </div>
        <div className="pt-20">
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
