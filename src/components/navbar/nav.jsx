import "./nav.css";
import { assets } from "../../assets/assets";
import { useEffect, useState } from "react";

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    return window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <img src={assets.logo} alt="" />
      <ul>
        <a href="#home">
          home
        </a>
        <a href="#about">about</a>
        <a href="#programs">programs</a>
        <a href="#campus">campus</a>
        <a href="#testimonials">testimonials</a>
        <a>
          <button className="contact">Contact Us</button>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
