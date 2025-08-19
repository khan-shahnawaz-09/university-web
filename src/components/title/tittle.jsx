import './title.css';

function Title({ title, subtitle }) {
  return (
    <div className="Title" data-aos="fade-up" data-aos-duration="800">
      <p className="title" data-aos="fade-right" data-aos-delay="200">{title}</p>
      <h1 data-aos="fade-left" data-aos-delay="400">{subtitle}</h1>
    </div>
  );
}

export default Title;
