import "./contact.css";
import { assets } from "../../assets/assets";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Loading from "../loading/laoding";
import Swal from "sweetalert2";
const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(event.target);

    formData.append("access_key", "5fa08057-b144-42bc-8f65-0478e3086c1c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);
    if (data.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting us.",
        icon: "success",
        draggable: true,
      });

      setResult("submit is success");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.error);
    }
    setTimeout(() => {
      return setResult("");
    }, 3000);
  };

  return (
    <div className="contact" data-aos="fade-up" id="contact">
      <div className="contact-container" data-aos="fade-right">
        <h1>
          Send us a message
          <img src={assets.msg_icon} alt="" />
        </h1>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <IoMdMail />
            srk21@gmail.com
          </li>
          <li>
            <FaPhone />
            +1 (555) 123-4567
          </li>
          <li>
            <FaLocationDot />1 Massachusetts Ave, surat MA 02139,uk
          </li>
        </ul>
      </div>

      <div className="contact-container" data-aos="fade-left">
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={onSubmit}>
            <label>enter your name</label>
            <input name="name" type="text" placeholder="Your Name" required />

            <label>enter your email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />

            <label>enter your phone number</label>
            <input
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              required
            />

            <label>enter your message</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              Send Message
            </button>
          </form>
        )}
        {result && <div className="result-msg">✅ {result}</div>}
      </div>
    </div>
  );
};

export default Contact;
//                 and engaging curriculum have made my learning experience
