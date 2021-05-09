import React, { useEffect, useState, useRef } from "react";

import Footer from "../Layout/Footer";
import { AgencyNav } from "../Layout/AgencyNav";

import Aos from "aos";
import { TweenMax } from "gsap";
import { Link } from "react-router-dom";

export const Agency = () => {
  let app = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 2000 });

    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  }, [app]);

  const [navData, setNavData] = useState({
    active: false,
  });

  const { active } = navData;

  const handleToggle = () => {
    setNavData({ ...navData, active: !active });
  };

  return (
    <div className="root-div agency-body" ref={(el) => (app = el)}>
      <AgencyNav />
      <section className="agency-showcase">
        <img
          src="\img\agency\showcase-img-abstract.png"
          alt=""
          className="img-fluid img-abstract d-none d-lg-block"
          data-aos="fade-left"
        />
        <img
          src="\img\agency\showcase-img-man.png"
          alt=""
          className="img-fluid img-man d-none d-lg-block"
          data-aos="fade-up"
        />
        <img
          src="\img\agency\successful-payment.png"
          alt=""
          className="img-fluid img-payment d-none d-lg-block"
          data-aos="zoom-in"
        />
        <img
          src="\img\agency\message.png"
          alt=""
          className="img-fluid img-message d-none d-lg-block"
          data-aos="zoom-in"
        />
        <img
          src="\img\agency\successful-bill.png"
          alt=""
          className="img-fluid img-bill d-none d-lg-block"
          data-aos="zoom-in"
        />
        <img
          src="\img\agency\print-receipt.png"
          alt=""
          className="img-fluid img-receipt d-none d-lg-block"
          data-aos="zoom-in"
        />
        <div className="container">
          <div className="agency-showcase-content">
            <h1 className="agency-showcase-h1">
              Welcome to Agency{" "}
              <span className="mytext-secondary">Banking</span>{" "}
            </h1>
            <p className="agency-showcase-p">
              Become a mobile bank with ParaPay Agent by providing regular
              banking services to the people in your immediate community. Earn
              good money in the process.
            </p>

            <a href="" class="agency-btn-large-primary">
              <img
                src="./img/icons/flat-ui_google.svg"
                alt=""
                className="img-fluid"
              />
              <div>
                <p>Download on</p>
                <h6>PLAYSTORE</h6>
              </div>
            </a>

            <div className="verified">
              <p>Verified by:</p>
              <div>
                <img
                  src="\img\agency\logo\rubies-logo.png"
                  alt=""
                  className="img-fluid"
                />
                <img
                  src="\img\agency\logo\itex-logo.png"
                  alt=""
                  className="img-fluid"
                />
                <img
                  src="\img\agency\logo\monify-logo.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="become">
        <div className="container">
          <h2 className="text-center">Why Become a ParaPay Agent ?</h2>
          <div className="become-grid">
            <div data-aos="fade-up" className="light-card">
              <img
                src="\img\agency\icons\TV-phone.svg"
                alt=""
                className="img-fluid"
              />
              <h5>Affordable Services </h5>
              <p>
                ParaPay has deployed structures and strategies that allow for
                cheap and very affordable banking services. With ParaPay, agents
                can genuinely build wealth.
              </p>
            </div>
            <div data-aos="fade-up" className="light-card">
              <img
                src="\img\agency\icons\pen.svg"
                alt=""
                className="img-fluid"
              />
              <h5>Easy Registration</h5>
              <p>
                Becoming a ParaPay Agent is easy. Just click on "Get Started"
                and register using your correct credentials. You will be
                contacted by an assigned ParaPay officer in 24hrs.
              </p>
            </div>
            <div data-aos="fade-up" className="light-card">
              <img
                src="\img\agency\icons\clock.svg"
                alt=""
                className="img-fluid"
              />
              <h5>Affordable Services </h5>
              <p>
                We take your enterprise very seriously. As a result, we pay very
                close attention to supporting our agents. You can reach us
                through our in-app live chat or send us an email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <div className="text-section">
            <h2>Why You Should Trust Us</h2>
            <p>
              ParaPay Agent is built upon a substantial, global standard
              technology architecture. Our servers are trusted and used by
              fortune500 companies around the world - a feat that guarantees 99%
              service uptime. Our solution is Rubies MFB - a CBN licensed
              financial institution.
            </p>
          </div>

          <img
            src="\img\agency\trust-image.png"
            alt=""
            className="img-fluid"
            data-aos="zoom-in"
          />
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h2 className="text-center">How it works</h2>

          <div className="works-grid">
            <div className="works-card" data-aos="fade-up">
              <img src="\img\agency\register.png" alt="" />
              <h4>Register</h4>
              <p>
                Click on <span className="text-light">GET STARTED</span> to
                register and become a parapay agent
              </p>
            </div>
            <div className="works-card" data-aos="fade-up">
              <img src="\img\agency\verify.png" alt="" />
              <h4>Verify Details</h4>
              <p>Confirm and verify your details</p>
            </div>
            <div className="works-card" data-aos="fade-up">
              <img src="\img\agency\start.png" alt="" />
              <h4>Start Banking</h4>
              <p>Welcome to Parapay Agency Banking</p>
            </div>
          </div>
        </div>
      </section>

      <section className="agency-download">
        <img
          src="\img\agency\threephone.png"
          alt=""
          className="img-fluid two-phones d-none d-lg-block"
          data-aos="fade-up"
        />
        <div className="container">
          <div className="text-section">
            <h2>
              Download Para<span className="mytext-secondary">Pay</span> Agent
              App
            </h2>
            <p className="download-p">
              Get started immediately! Download the ParaPay Agent App today and
              start earning money.
            </p>
            <a href="">
              <div class="agency-btn-large-primary">
                <img
                  src="./img/icons/flat-ui_google.svg"
                  alt=""
                  className="img-fluid"
                />
                <div>
                  <p>Download on</p>
                  <h6>PLAYSTORE</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="ready">
        <div className="container text-center">
          <h1>Ready to get started?</h1>
          <p>Sign up in minutes to get started.</p>
          <Link to="/agency/register" className="agency-btn-medium">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agency;
