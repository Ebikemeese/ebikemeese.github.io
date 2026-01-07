import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles";
import { services } from "../constants/index";
import gsap from "gsap";


const ServiceCard = ({ index, title, icon }: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

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

    useEffect(() => {
        if (inView && cardRef.current && scrollDir === "down") {
        gsap.fromTo(
            cardRef.current,
            { x: 100, opacity: 0 }, // slide up from bottom
            {
            x: 0,
            opacity: 1,
            duration: 0.75,
            delay: index * 0.3,
            ease: "power3.out",
            }
        );
        }
    }, [inView, index, scrollDir]);

    return (
        <div ref={ref} className="xs:w-[250px] w-full">
        <div
            ref={cardRef}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
                {title}
            </h3>
            </div>
        </div>
        </div>
    );
};

const About = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);

    const [headingInViewRef, headingInView] = useInView({ triggerOnce: false, threshold: 0.3 });
    const [paraInViewRef, paraInView] = useInView({ triggerOnce: false, threshold: 0.3 });

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
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        }
    }, [headingInView, scrollDir]);

    // Animate paragraph only when scrolling down
    useEffect(() => {
        if (paraInView && paraRef.current && scrollDir === "down") {
        gsap.fromTo(
            paraRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
        }
    }, [paraInView, scrollDir]);

    return (
            <>
                <div className="bg-[#252838] px-4 py-4">
                
                    <div ref={headingInViewRef}>
                        <div ref={headingRef}>
                        <p className={styles.sectionSubText}>About</p>
                        <h2 className={styles.sectionHeadText}>Overview.</h2>
                        </div>
                    </div>

                    <div ref={paraInViewRef}>
                        <p
                        ref={paraRef}
                        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                        >
                        I'm a skilled full-stack developer with experience in Python, TypeScript and
                        JavaScript, and expertise in frameworks like React.js, Django, Django REST Framework, and Three.js..
                        I work confidently with tools such as TailwindCSS, Bootstrap, GSAP, 
                        and jQuery to craft engaging interfaces, while leveraging PostgreSQL, 
                        Supabase, Clerk, and Appwrite for robust backend solutions. 
                        I'm a quick learner and collaborate closely with clients to create efficient, 
                        scalable, and user‑friendly applications that solve real‑world problems. 
                        Let's work together to bring your ideas to life!
                        </p>
                    </div>

                    <div className="mt-20 flex flex-row max-sm:flex-col max-md:flex-col max-xl:flex-row gap-10">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>
                </div>
            </>
        );
    };

export default About;




