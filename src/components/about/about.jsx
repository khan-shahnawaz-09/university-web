import "./about.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about" id="about">
      <img
        src={assets.about}
        alt=""
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <div
        className="about-text"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h3>ABOUT UNIVERSITY</h3>
        <h1>Nurturing Tomorrow's Leaders Today</h1>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <br />
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <br />
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
