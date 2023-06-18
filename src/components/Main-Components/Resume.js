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
              <h2 className="valtra">Valtra</h2>
              <p>React Native Mobile application </p>
              <h2 className="mf">Massey Ferguson</h2>
              <p>React Native Mobile application</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2021</span>
              <h2>
                Joined <b className="agco">AGCO</b>
              </h2>
              <p>As Lead Mobile Application Developer </p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2020 - 2021</span>
              <h2 className="fendt">FendtONE</h2>
              <p>React Native Mobile application</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2019 - 2020</span>
              <h2 className="ao">Australian Open</h2>
              <p>React Native Mobile application</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2017 - 2019</span>
              <h2 className="laminex">Laminex</h2>
              <p>ReactJS E-Com website</p>
              <h2 className="sce">Southern California Edison</h2>
              <p>ReactJS electricity utility website</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2015 - 2017</span>
              <h2 className="gst">GST</h2>
              <p>AngularJS Indirect Tax Portal</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2015</span>
              <h2>
                Joined <b className="infy">Infosys</b>
              </h2>
              <p>As Systems Engineer Trainee</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
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
