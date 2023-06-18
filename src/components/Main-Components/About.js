import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              ...every great thing begin with
              <br />
              an even <span>better story</span>
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            With over 8 years of experience, I am a skilled Techie who has
            developed the official mobile application for the Australian Open
            and implemented India's largest indirect tax portal. I specialize in
            React Native and React JS for cross-device application development.
            As a self-motivated tech enthusiast, I excel in designing,
            developing, and maintaining products throughout their lifecycle.
            With strong leadership abilities, I guide and mentor teams toward
            professional growth. Passionate about leveraging technology for
            impactful change, I am dedicated to delivering excellence and
            driving success.
          </p>
        </div>
      </div>
    </section>
  );
}
