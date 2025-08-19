import "./hero.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="hero" data-aos="fade-in" id="home">
      <div className="hero-text">
        <h1 data-aos="fade-up">Welcome to Our University</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="explore" data-aos="zoom-in" data-aos-delay="400">
          Explore Programs
        </button>
      </div>
    </section>
  );
};

export default Hero;
