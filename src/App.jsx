import "./index.css";
import { useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaLinkedin,
} from "react-icons/fa";
import { CgScrollH } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";

export default function App() {
  return (
    <div>
      <Header />
      <FirstPage />
      <Heading text="About Us" elementId="about-us" />
      <AboutUs />
      <Heading text="Contact" elementId={"contact"} />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="./logo.jpg" alt="logo" className="logo" />
        <h1 className="title">She Can Foundation</h1>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <button className="nav-btn">
              <a className="page-links" href="#">
                Home
              </a>
            </button>
          </li>
          <li>
            <button className="nav-btn">
              <a className="page-links" href="#about-us">
                About Us
              </a>
            </button>
          </li>
          <li>
            <button className="nav-btn">
              <a className="page-links" href="#contact">
                Contact
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function FirstPage() {
  return (
    <div className="first-page">
      <ImageLoop />
      <TagLine />
    </div>
  );
}

function ImageLoop() {
  const imageList = [
    "image-1.jpg",
    "image-2.jpg",
    "image-3.jpg",
    "image-4.jpg",
    "image-5.jpg",
    "image-6.jpg",
    "image-7.jpg",
    "image-8.jpg",
    "image-9.jpg",
    "image-10.jpg",
  ];

  const [numImage, setNumImage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  function handleLeft() {
    numImage > 0 ? setNumImage(numImage - 1) : setNumImage(9);
  }

  function handleRight() {
    numImage < 9 ? setNumImage(numImage + 1) : setNumImage(0);
  }

  return (
    <div className="img-scroll">
      <div
        className="img-loop"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <FaArrowCircleLeft
          className={`scrollBtn left ${showButton ? "show" : ""}`}
          onClick={handleLeft}
        />

        <img src={imageList[numImage]} alt="images" className="front-img" />

        <FaArrowCircleRight
          className={`scrollBtn right ${showButton ? "show" : ""}`}
          onClick={handleRight}
        />
      </div>
      <CgScrollH />
    </div>
  );
}

function TagLine() {
  return <h1 className="saying">We can make them smile.</h1>;
}

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h1 className="saying">SHE CAN, SHE WILL, WE SUPPORT</h1>
        <p className="about-us-detail">
          <b>She Can Foundation</b> is an NGO, registered under the Indian
          Society Registration Act of 1860, dedicated to uplifting and
          empowering underprivileged women. Our mission is to provide education,
          training, and resources to help women from marginalized communities
          overcome obstacles and achieve their full potential. We work to
          promote gender equality, increase access to healthcare and education,
          and provide opportunities for economic growth and development. Through
          our programs and initiatives, we aim to create a world where every
          woman has the resources and support she needs to succeed. Join us in
          our mission to empower women and help build a brighter future for all.
        </p>
      </div>
      <div>
        <img className="detail-img" src="./image-11.jpg" alt="" />
      </div>
    </div>
  );
}

function Heading({ text, elementId }) {
  return (
    <h1 className="topics" id={elementId}>
      {text}
    </h1>
  );
}

function Contact() {
  return (
    <div className="contacts">
      <div>
        <img className="detail-img" src="./image-12.jpg" alt="" />
      </div>
      <div>
        <h3 className="email">
          <u>Email</u> : <u>president@shecanfoundation.org</u>{" "}
        </h3>
        <h3 className="socials">
          <u>Follow us </u> :{" "}
          <a href="https://www.instagram.com/shecanfoundation.ngo">
            <GrInstagram className="icons" />
          </a>
        </h3>
        <h3 className="socials">
          <u>Follow us </u> :{" "}
          <a href="https://www.linkedin.com/company/shecanfoundation/">
            <FaLinkedin className="icons" />
          </a>
        </h3>
      </div>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <p className="footer">When she can, the world changes. &copy; {year}</p>
  );
}
