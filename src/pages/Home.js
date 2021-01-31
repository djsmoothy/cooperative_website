import React, {useEffect, useState, useRef} from 'react';
import Aos from 'aos';
import {TweenMax, TimelineLite, Power3, Power2, gsap} from 'gsap';

import {TextPlugin} from 'gsap/TextPlugin';

import Navbar from '../Layout/Navbar';
import {FeaturesCards, SeamlessCards} from '../components/Cards';
import {ButtonGrid} from '../components/Button';
import 'aos/dist/aos.css';
import Footer from '../Layout/Footer';

const Home = () => {
  gsap.registerPlugin(TextPlugin);
  let app = useRef(null);

  let payment = useRef(null);
  let cursor = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    Aos.init({duration: 2000});

    TweenMax.to(app, 0, {css: {visibility: 'visible'}});

    TweenMax.to(cursor, 1, {opacity: 0, ease: Power2.inOut, repeat: -1});

    tl.to(payment, {
      duration: 2,
      ease: Power3.ease,
      text: ' Payment',
      delay: 1.5,
    });
  }, [app]);

  return (
    <div className='root-div' ref={(el) => (app = el)}>
      <Navbar />

      <section className='showcase'>
        <div className='container'>
          <img
            data-aos='zoom-in'
            src='./img/hashtag.png'
            alt=''
            className='img-fluid hashtag'
          />

          <div className='showcase-left'>
            <div className='heading-and-image'>
              <img
                src='./img/H1image.svg'
                alt=''
                data-aos='fade-down'
                className='img-fluid'
              />
              <h1 data-aos='fade-up'>
                HashTag
                <span ref={(el) => (payment = el)}> </span>
                <span ref={(el) => (cursor = el)}>_</span>
              </h1>
            </div>

            <div className='text-and-button'>
              <p className='showcase-text'>
                When having too many bank account numbers in your head becomes a
                problem, HashTag Payment is your next option. Now you can send
                and receive money with your unique HashTag; just like
                #QueenTemi, #Chiboy, #MallamNuhu
              </p>
              <ButtonGrid aosdata='fade-right' />
            </div>
          </div>

          <img
            data-aos='fade-left'
            src='./img/showcase_image.png'
            alt=''
            className='img-fluid showcase-image d-none d-lg-block'
          />
        </div>
        <img
          data-aos='fade-right'
          src='./img/hashtag2.svg'
          alt=''
          className='img-fluid hashtag2 d-none d-lg-block'
        />
      </section>

      <section className='container text-center partners'>
        <h4>Our Partners</h4>
      </section>

      <section className='partners-content'>
        <div className='container partners-image'>
          <img
            src='./img/partners/rubies-logo.png'
            alt=''
            className='img-fluid'
          />
          <img src='./img/partners/monnify.png' alt='' className='img-fluid' />
          <img src='./img/partners/dandahu.png' alt='' className='img-fluid' />
          <img src='./img/partners/itex.png' alt='' className='img-fluid' />
          <img
            src='./img/partners/futterwave.png'
            alt=''
            className='img-fluid'
          />
        </div>
      </section>

      <section className='seamless'>
        <div className='container'>
          <div>
            <img
              data-aos='fade-right'
              src='./img/PC_Phone.png'
              alt=''
              className='img-fluid pc-and-phone'
            />
          </div>
          <div className='seamless-content'>
            <div className='heading-and-image'>
              <img src='./img/h2img.svg' alt='' className='img-fluid' />
              <h1>Seamless Banking</h1>
            </div>

            <p>
              Easy, convenient, and safe banking has never been so
              straightforward. ParaPay simplifies everything.
            </p>

            <div className='seamless-list'>
              <img
                data-aos='fade-right'
                src='./img/line.png'
                alt=''
                className='img-fluid list-image'
              />
              <div>
                <SeamlessCards
                  aosdata='fade-up'
                  classprops={'secondary'}
                  iconpath={'./img/icons/icon1.svg'}
                  title={'Create Account'}
                  text={`First, get registered by following the simple sign up procedure. It's not bogus; we promise!`}
                />
                <SeamlessCards
                  aosdata='fade-up'
                  classprops={'primary'}
                  iconpath={'./img/icons/icon2.svg'}
                  title={'Choose Paratag'}
                  text={`Then, you'll need to style yourself up a
                  little bit by choosing a ParaTag - your unique hashtag that
                  matches your grit. Mine is #adenikecole`}
                />
                <SeamlessCards
                  aosdata='fade-up'
                  classprops={'secondary'}
                  iconpath={'./img/icons/icon3.svg'}
                  title={'Get Verified'}
                  text={`Finally, we will need to be sure you're not a
                  robot. Upgrade to a ParaPro user to enjoy all the benefits
                  and a limitless experience. Join the winning team!`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='feature'>
        <div className='container'>
          <div className='heading-and-image text-center'>
            <img src='./img/h2img.svg' alt='' className='img-fluid' />
            <h1>Features That Gives You a Clear Edge</h1>
          </div>

          <div className='feature-content'>
            <FeaturesCards
              aosdata='fade-up'
              imagepath={`./img/hash.png`}
              iconpath={`./img/icons/hashtag.svg`}
              title={`Hashtag Payments`}
              text={`Send and receive money using your hashtag. No need for wallet or
              account numbers.`}
            />
            <FeaturesCards
              aosdata='fade-up'
              imagepath={`./img/box.png`}
              iconpath={`./img/icons/box.svg`}
              title={`Scan2Pay`}
              text={`Now you can pay for goods and services by scanning the ParaPay QR
              Code. Simple and Fast.`}
            />
            <FeaturesCards
              aosdata='fade-up'
              imagepath={`./img/mark.png`}
              iconpath={`./img/icons/mark.svg`}
              title={`Secure Payments`}
              text={`ParaPay is built around security and strength that ensures your
              payments are completed securely`}
            />
            <FeaturesCards
              aosdata='fade-up'
              imagepath={`./img/house.png`}
              iconpath={`./img/icons/house.svg`}
              title={`Affordability`}
              text={`ParaPay has adopted strategies that puts our customers first and makes
              us very affordable.`}
            />
          </div>
        </div>
      </section>

      <section className='transaction'>
        <div className='container'>
          <div className='heading-and-image text-center'>
            <img src='./img/h2img.svg' alt='' className='img-fluid' />
            <h1>Make Transparent Transactions</h1>
          </div>

          <div className='transaction-content'>
            <div className='transaction-card'>
              <h5>
                Start Making Smooth, Transparent Transactions From Your Phone
              </h5>
              <p>
                Leverage our open transaction service that ensures transparency
                across all payments on the ParaPay app. Request reports, Query
                Statements, See the charges before you pay, know the parties
                involved. Enjoy limitless payments
              </p>
            </div>

            <img
              data-aos='fade-up'
              src='./img/atm_card.png'
              alt=''
              className='img-fluid atm-img'
            />
            <img
              src='./img/phone_center.svg'
              alt=''
              className='img-fluid center-img'
            />
          </div>
        </div>
      </section>

      <section className='banking'>
        <div className='container'>
          <div className='banking-content'>
            <div className='text-content'>
              <div className='heading-and-image'>
                <img src='./img/h2img.svg' alt='' className='img-fluid' />
                <h1>Redefining Payments</h1>
              </div>
              <p>
                ParaPay is adding some humor to your banking experience - we are
                dedicated to the understanding of the psyche of our customers
                and as a result, tailor our system to meet your needs. We take
                financial inclusion VERY SERIOUSLY!
              </p>
            </div>

            <img
              src='./img/play.svg'
              alt=''
              className='img-fluid banking-img'
            />
          </div>
        </div>
      </section>

      <section className='download'>
        <div className='container'>
          <div className='download-content'>
            <img
              data-aos='fade-up'
              src='./img/two_phones.png'
              alt=''
              className='img-fluid download-img'
            />
            <div className='download-text'>
              <div className='heading-and-image'>
                <img src='./img/h2img.svg' alt='' className='img-fluid' />
                <h1>
                  Download Para<span className='pay-color'>Pay</span>
                </h1>
              </div>
              <ButtonGrid />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
