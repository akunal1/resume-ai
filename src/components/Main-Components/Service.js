import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="services"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-stream"></i> Services
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Specializations</span>
            </h1>
          </div>

          <div className="services-items">
            <div className="service-item scroll-animation" data-aos="fade-up">
              <i className="las la-code"></i>
              <h2>Development</h2>
              <p>
                I possess expertise in developing intricate websites and mobile
                applications with a focus on offline-first functionality.
              </p>
              {/* <span className="projects">126 Projects</span> */}
            </div>
            <div className="service-item scroll-animation" data-aos="fade-up">
              <i className="las la-bezier-curve"></i>
              <h2>UX Design</h2>
              <p>
                I possess the ability to conceive and fabricate distinctive
                digital commodities employing Figma, thus exhibiting my prowess
                for innovative ideation in the realm of technological creations.
              </p>
              {/* <span className="projects"> Projects</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
