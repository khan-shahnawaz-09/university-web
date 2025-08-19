import "./program.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../../assets/assets";

const Program = () => {


  return (
    <div className="programs" id="programs">
      <div className="programList">
        <div className="program" data-aos="fade-up" data-aos-delay="0">
          <img src={assets.program_1} alt="" />
          <div className="caption">
            <img src={assets.program_icon_1} alt="" />
            <p>graduation degree</p>
          </div>
        </div>

        <div className="program" data-aos="fade-up" data-aos-delay="200">
          <img src={assets.program_2} alt="" />
          <div className="caption">
            <img src={assets.program_icon_2} alt="" />
            <p>Master degree</p>
          </div>
        </div>

        <div className="program" data-aos="fade-up" data-aos-delay="400">
          <img src={assets.program_3} alt="" />
          <div className="caption">
            <img src={assets.program_icon_3} alt="" />
            <p>post graduate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
