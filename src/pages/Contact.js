import React, {useEffect, useRef} from 'react';
import {TweenMax} from 'gsap';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import Aos from 'aos';

export const Contact = () => {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}});

    Aos.init({duration: 2000});
  }, [app]);

  return (
    <div className='root-div' ref={(el) => (app = el)}>
      <Navbar />
      <section className='contact-heading'>
        <div className='container text-center'>
          <div className='heading-and-image'>
            <img src='./img/H1image.svg' alt='' className='img-fluid' />
            <h1>Contact Us</h1>
          </div>
          <p>
            We’d love to hear from you. Feel free to contact us and we’d get
            back to you as soon as possible
          </p>
        </div>
      </section>

      <section className='callandmessage'>
        <div className='container'>
          <div className='photoandcard'>
            <div>
              <img
                src='./img/callgirlpicture.png'
                alt=''
                className='img-fluid callgirl'
              />
              <div className='callgirl-cards'>
                <div className='mycard-secondary'>
                  <p>
                    <span>
                      <img
                        src='./img/icons/hellocall.svg'
                        alt=''
                        className='img-fluid'
                      />
                    </span>
                    +234 908 631 3835
                  </p>
                </div>
                <div className='mycard-secondary'>
                  <p>
                    <span>
                      <img
                        src='./img/icons/hellomessage.svg'
                        alt=''
                        className='img-fluid'
                      />
                    </span>
                    hello@parapay.io
                  </p>
                </div>
                <div className='mycard-secondary'>
                  <p>
                    <span>
                      <img
                        src='./img/icons/helloaddress.svg'
                        alt=''
                        className='img-fluid'
                      />
                    </span>
                    Brains & Hammers, Apo, Abuja FCT, Nigeria.
                  </p>
                </div>
                <div className='mycard-secondary'>
                  <span>
                    <img
                      src='./img/icons/hellofacebook.svg'
                      alt=''
                      className='img-fluid'
                    />
                  </span>
                  <span>
                    <img
                      src='./img/icons/hellolinkedin.svg'
                      alt=''
                      className='img-fluid'
                    />
                  </span>
                  <span>
                    <img
                      src='./img/icons/hellotwitter.svg'
                      alt=''
                      className='img-fluid'
                    />
                  </span>
                  <span>
                    <img
                      src='./img/icons/helloinsta.svg'
                      alt=''
                      className='img-fluid'
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className='form-area mycard-secondary' data-aos='fade-up'>
              <h5 className='text-center'>Send us a message</h5>
              <form>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <label>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='name@example.com'
                  />
                </div>

                <div className='form-group'>
                  <label>Message</label>
                  <textarea
                    className='form-control'
                    rows='5'
                    placeholder='Type message...'
                  ></textarea>
                </div>

                <button type='submit' className='card-btn-secondary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='reach-us'>
        <div className='container'>
          <h2>Reach Us Online</h2>
          <p className='heading-paragraph'>
            If you still have any question, please contact our customer care
            support, we are always here to assist you.
          </p>

          <div className='reach-us-cards'>
            <div className='mycard-secondary' data-aos='fade-up'>
              <img src='./img/icons/callicon.svg' alt='' />
              <h5>Call Center</h5>
              <p>
                Our customer care agents are always available to recieve your
                calls from Monday to Friday, 8am - 6pm
              </p>
            </div>
            <div className='mycard-primary' data-aos='fade-up'>
              <img src='./img/icons/chaticon.svg' alt='' />
              <h5>Chat</h5>
              <p>
                Our customer care agents are always available to chat with you
                live 24hrs, everyday
              </p>
            </div>

            <div className='mycard-secondary' data-aos='fade-up'>
              <img src='./img/icons/messageicon.svg' alt='' />
              <h5>Message</h5>
              <p>
                Send us a message on any of our platforms and we’ll get back to
                you as soon as possible
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
