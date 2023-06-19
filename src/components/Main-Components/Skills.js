import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              <span>Skills</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
                    alt="React Native"
                    width={70}
                  />
                  <h1 className="percent font-24">React Native</h1>
                </div>
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React" />
                  <h1 className="percent font-24">ReactJS</h1>
                </div>
                {/* <p className="name">React</p> */}
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                    alt="Typescript"
                    height={60}
                  />
                  <h1 className="percent font-24">Typescript</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://avatars.githubusercontent.com/u/7575099?s=200&v=4"
                    alt="Realm DB"
                    height={60}
                  />
                  <h1 className="percent font-24">Realm DB</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/figma.png" alt="Figma" />
                  <h1 className="percent font-24">Figma</h1>
                </div>
                {/* <p className="name">Figma</p> */}
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://img.freepik.com/free-vector/superapp-isometric-composition-with-mobile-phone-surrounded-by-application-icons-vector-illustration_1284-78322.jpg"
                    alt="Super app"
                    height={60}
                  />
                  <h1 className="percent font-24">Super App</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="git"
                    height={60}
                  />
                  <h1 className="percent font-24">Git</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://pbs.twimg.com/profile_images/1145617831905681408/XNKktHjN_400x400.png"
                    alt="React"
                    height={60}
                  />
                  <h1 className="percent font-24">VSTS</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png"
                    alt="expo"
                    height={60}
                  />
                  <h1 className="percent font-24">Expo</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://seeklogo.com/images/M/mapbox-logo-D6FDDD219C-seeklogo.com.png"
                    alt="map-box"
                    height={60}
                  />
                  <h1 className="percent font-24">Mapbox</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
