import "./gallery.css";
import { assets } from "../../assets/assets";

const Gallery = () => {
  return (
    <div className="gallery" data-aos="fade-up" id="campus">
      <div className="gallery-images">
        <img src={assets.img_1} alt="" data-aos="zoom-in" />
        <img src={assets.img_2} alt="" data-aos="zoom-in" data-aos-delay="100" />
        <img src={assets.img_4} alt="" data-aos="zoom-in" data-aos-delay="200" />
        <img src={assets.img_3} alt="" data-aos="zoom-in" data-aos-delay="300" />
      </div>
      <div className="gallery-btn" data-aos="fade-up" data-aos-delay="400">
        <button>
          see more here <img src={assets.white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
