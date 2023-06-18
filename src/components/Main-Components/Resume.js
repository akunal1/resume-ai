import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2021 - Present</span>
              <h2>Valtra</h2>
              <p>React Native Mobile application </p>
              <h2>Massey Ferguson</h2>
              <p>React Native Mobile application</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2021</span>
              <h2>
                Joined <b>AGCO</b> as Mobile application Lead
              </h2>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2020 - 2021</span>
              <h2>FendtONE</h2>
              <p>React Native Mobile application</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2019 - 2020</span>
              <h2>Australian Open</h2>
              <p>React Native Mobile application</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2017 - 2019</span>
              <h2>Laminex</h2>
              <p>ReactJS E-Com website</p>
              <h2>Southern California Edison</h2>
              <p>ReactJS electricity utility website</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2015 - 2017</span>
              <h2>GST</h2>
              <p>AngularJS Indirect Tax Portal</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2015</span>
              <h2>
                Joined <b>Infosys</b> as systems engineer trainee
              </h2>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2011 - 2015</span>
              <h2>
                Completed Bachelors Degree in Electrical & Electronic
                Engineering
              </h2>
              <p>S'O'A University, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
