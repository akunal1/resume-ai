import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a
                    href="https://xattax.in/blog/wp-content/uploads/2018/11/gst-goods-services-tax.jpg"
                    data-lightbox="example-1"
                  >
                    <img
                      src="https://wallpapercave.com/wp/wp8405904.jpg"
                      alt="Portfolio"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a
                        href="https://docs.angularjs.org/guide/introduction"
                        target="_blank"
                        rel="noreferrer"
                      >
                        AngularJS
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://html.com/document/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HTML5
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://devdocs.io/css/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CSS3
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.gst.gov.in/">
                    GST - Goods and Services Tax
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="https://i.eurosport.com/2017/01/08/1998867-41972827-2560-1440.png"
                    data-lightbox="example-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://girraphic.com/wp-content/uploads/2020/02/703834296.jpg"
                      alt="Portfolio"
                    />
                  </a>

                  <img
                    src="https://i.eurosport.com/2017/01/08/1998867-41972827-2560-1440.png"
                    alt="Portfolio"
                  />

                  <ul className="portfolio-categories">
                    <li>
                      <a
                        href="https://reactnative.dev/docs/getting-started"
                        target="_blank"
                        rel="noreferrer"
                      >
                        React Native
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Typescript
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://play.google.com/store/apps/details?id=au.com.tennis.ausopen&hl=en&gl=US">
                    Australian Open
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-left">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="https://wallpaperaccess.com/full/4848940.jpg"
                    data-lightbox="example-1"
                  >
                    <img
                      src="https://e0.pxfuel.com/wallpapers/451/838/desktop-wallpaper-fendt-green-logo-green-brickwall-fendt-logo-brands-fendt-neon-logo-fendt-thumbnail.jpg"
                      alt="Portfolio"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a
                        href="https://www.figma.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Figma
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://reactnative.dev/docs/getting-started"
                        target="_blank"
                        rel="noreferrer"
                      >
                        React Native
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Typescript
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://fendt.one/">FendtONE</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
