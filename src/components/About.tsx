import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { services } from "../constants/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ title, icon }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((el, i) => {
          gsap.fromTo(
          el,
          { x: -150, opacity: 0 },
          {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.1,
              stagger: 1.2,
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
    <div className="xs:w-[250px] w-full">
      <div
        ref={cardRef}
        className="service-card w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
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

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 150, opacity: 0 },
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

    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div id="about" className="bg-[#252838] px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div ref={headingRef}>
          <p className={styles.sectionSubText}>About</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

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

        <div className="service-card mt-20 flex flex-row max-sm:flex-col max-md:flex-col max-xl:flex-row gap-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;





