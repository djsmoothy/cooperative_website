import React, {useEffect, useRef} from 'react';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import {TweenMax} from 'gsap';
import Aos from 'aos';

const About = () => {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}});

    Aos.init({duration: 2000});
  }, [app]);

  return (
    <div className='root-div' ref={(el) => (app = el)}>
      <Navbar />

      <section className='about-heading'>
        <div className='container text-center'>
          <div className='heading-and-image'>
            <img src='./img/H1image.svg' alt='' className='img-fluid' />
            <h1>About Us</h1>
          </div>
          <p>
            At ParaPay, we are building bridges that brings the financially
            underserved closer and fully included and in accordance with the
            CBN’s mandate. Business and Individuals in hard-to-reach areas now
            have access to a wide range of financial access across our various
            products.
          </p>
        </div>
      </section>

      <section className='photo-grid'>
        <div className='container photo-cards'>
          <div className='picture-card photo1'>
            <img
              src='./img/manholdingphone.png'
              alt=''
              className='img-fluid'
              data-aos='fade-right'
            />
          </div>
          <div className='picture-card photo2'>
            <img
              src='./img/manraisedhands.png'
              alt=''
              className='img-fluid'
              data-aos='fade-up'
            />
          </div>
          <div className='picture-card photo3'>
            <img
              src='./img/manholdingcash.png'
              alt=''
              className='img-fluid'
              data-aos='fade-up'
            />
          </div>
          <div className='picture-card photo4'>
            <img
              src='./img/womanholdingphone.png'
              alt=''
              className='img-fluid'
              data-aos='fade-right'
            />
          </div>
        </div>
      </section>

      <section className='our-story'>
        <div className='container our-story-content'>
          <div className='heading'>
            <h1>Our Story</h1>
            <p>
              At ParaPay, we are building bridges that brings the financially
              underserved closer and fully included and in accordance with the
              CBN’s mandate. Business and Individuals in hard-to-reach areas now
              have access to a wide range of financial access across our various
              products.
            </p>
          </div>
          <div className='photo-box'>
            <img src='./img/addingwood.png' alt='' className='img-fluid' />
          </div>
        </div>
      </section>

      <section className='vision'>
        <div className='container vision-content'>
          <div className='vision-card' data-aos='fade-up'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus varius purus sit amet accumsan. Sed mollis ante in sapien
              vehicula, eu faucibus felis aliquam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aliquam luctus varius purus sit amet
              accumsan. Sed mollis ante in sapien vehicula, eu faucibus felis
              aliquam.
            </p>
          </div>
          <div className='vision-card' data-aos='fade-up'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus varius purus sit amet accumsan. Sed mollis ante in sapien
              vehicula, eu faucibus felis aliquam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aliquam luctus varius purus sit amet
              accumsan. Sed mollis ante in sapien vehicula, eu faucibus felis
              aliquam.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
