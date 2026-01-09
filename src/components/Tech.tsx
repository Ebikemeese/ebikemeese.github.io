import gsap from "gsap";
import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants";
import { styles } from "@/styles";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { othertechs } from "../constants";
import MagnetoButton from "./MagnetoButton";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const [headingInViewRef, headingInView] = useInView({
        triggerOnce: false,
        threshold: 0,
        rootMargin: "100px 0px",
    });
    const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

    // Track scroll direction
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setScrollDir("down");
        } else {
            setScrollDir("up");
        }
        lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    // Animate heading only when scrolling down
    useEffect(() => {
        if (headingInView && headingRef.current && scrollDir === "down") {
        gsap.fromTo(
            headingRef.current,
            { y: 150, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        }
    }, [headingInView, scrollDir]);

    // Animate balls
    useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".ball-item").forEach((el, i) => {
        gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
            },
        }
        );
    });

    gsap.utils.toArray<HTMLElement>(".magneto-item").forEach((el, i) => {
        gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
            },
        }
        );
    });
    }, []);


    return (
        <div id="tech" className="bg-[#252838] px-4 py-20">
            <div className="w-full max-w-7xl mx-auto">
                <div ref={headingInViewRef}>
                    <div ref={headingRef}>
                        <p className={styles.sectionSubText}>Tools</p>
                        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
                    {technologies.map((technology) => (
                        <div
                            className="ball-item w-28 h-28 cursor-pointer"
                            key={technology.name}
                            title={technology.name}
                        >
                        <BallCanvas icon={technology.icon} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
                    {othertechs.map((tech) => (
                        <div
                            className="magneto-item w-28 h-28 cursor-pointer"
                            key={tech.name}
                            title={tech.name}
                        >
                            <MagnetoButton 
                                othertechs={tech}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tech;
