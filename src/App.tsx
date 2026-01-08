// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait until loader finishes
    window.addEventListener("load", () => {
      gsap.fromTo(
        pageRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <Router>
        <Loader />
        <div ref={pageRef} style={{ opacity: 0 }}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
        </div>
        
    </Router>
  );
}

export default App;
