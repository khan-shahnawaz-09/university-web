import { useEffect } from "react";
import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Hero from "./components/hero/hero";
import Nav from "./components/navbar/nav";
import Program from "./components/program/program";
import Testimonials from "./components/testimonials/testimonials";
import Title from "./components/title/tittle";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <div className="container">
        <Title title="Our Programs" subtitle="Explore our programs" />
        <Program></Program>
        <Title title="About Us" subtitle="Learn more about us" />
        <About></About>
        <Title title="Gallery" subtitle="Explore our gallery" />
        <Gallery></Gallery>
        <Title title="Testimonials" subtitle="What our clients say about us" />
        <Testimonials></Testimonials>
        <Title title="Contact Us" subtitle="Get in touch with us" />
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
