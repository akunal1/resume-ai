import React from "react";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        {/* <img src="./assets/images/logo.png" alt="Logo" height={50} /> */}
        {/* <p className="designation">Web Developer & UX Designer</p> */}
      </div>
      <img className="me" src="./assets/images/me-b-bg.png" alt="Me" />
      <h2 className="email">me@avinashnayak.in</h2>
      <h2 className="address">Based in Bengaluru, India</h2>
      <p className="copyright">Web / Mobile app Developer & UX Designer</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://www.linkedin.com/in/avinash-nayak02/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lab la-linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/10612757/avinash"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lab la-stack-overflow" />
          </a>
        </li>

        <li>
          <a href="https://github.com/akunal1" target="_blank" rel="noreferrer">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>

      <a href="#contact" className="theme-btn">
        <i className="las la-sms"></i> Chat Now
      </a>
    </div>
  );
}
