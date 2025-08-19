import "./testimonials.css";
import { assets } from "../../assets/assets";
import {  useRef } from "react";

const Testimonials = () => {
  const ul = useRef();
  const back = useRef();
  const next = useRef();
  let tx = useRef(0);

  const handleShowButton = () => {
    if (tx.current >= 0) {
      back.current.style.display = "none";
      next.current.style.display = "block";
    } else if (tx.current <= -50) {
      next.current.style.display = "none";
      back.current.style.display = "block";
    } else {
      next.current.style.display = "block";
      back.current.style.display = "block";
    }
  };

  const handleNext = () => {
    if (tx.current > -50) {
      tx.current = tx.current - 25;
      ul.current.style.transform = `translateX(${tx.current}%)`;
      handleShowButton();
    }
  };

  const handleBack = () => {
    if (tx.current < 0) {
      tx.current = tx.current + 25;
      ul.current.style.transform = `translateX(${tx.current}%)`;
      handleShowButton();
    }
  };

 

  return (
    <div className="testimonials" id="testimonials">
      <img className="back-icon" src={assets.back_icon} alt="#" onClick={handleBack} ref={back} />
      <img className="next-icon" src={assets.next_icon} alt="#" onClick={handleNext} ref={next} />
      <div className="slider">
        <ul ref={ul} className="slider-list">
          {/* Slides (no change) */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_1} alt="" />
                <div className="user-detail">
                  <h1>sakura</h1>
                  <span>surat ,INDIA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_3} alt="" />
                <div className="user-detail">
                  <h1>JUNU</h1>
                  <span>goa ,INDIA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_4} alt="" />
                <div className="user-detail">
                  <h1>SRK</h1>
                  <span>chennai ,INDIA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user_2} alt="" />
                <div className="user-detail">
                  <h1>ALEX</h1>
                  <span>MUMBAI ,INDIA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
