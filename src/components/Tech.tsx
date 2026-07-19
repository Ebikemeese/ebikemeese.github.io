import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technologies, othertechs } from "../constants";
import { styles } from "@/styles";
import MagnetoButton from "./MagnetoButton";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  // Combine primary technologies and other tech skills extracted from GitHub README
  const allTechSkills = [...technologies, ...othertechs];

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    gsap.utils.toArray<HTMLElement>(".magneto-item").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: (i % 8) * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="tech" className="bg-[#252838] px-4 py-20 border-t border-purple/10">
      <div className="w-full max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center md:text-left">
          <p className={styles.sectionSubText}>Tools & Frameworks</p>
          <h2 className={styles.sectionHeadText}>Tech Stack & Skills.</h2>
          <p className="mt-3 text-secondary text-[16px] max-w-2xl">
            All technologies, frameworks, and skills pulled from my GitHub profile. Hover over any ball for magnetic feedback!
          </p>
        </div>

        {/* Magneto Balls Tech Grid */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-10 mt-16">
          {allTechSkills.map((tech) => (
            <div
              className="magneto-item cursor-pointer"
              key={tech.name}
              title={tech.name}
            >
              <MagnetoButton othertechs={tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
