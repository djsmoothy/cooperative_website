import React from 'react';
import {ButtonGrid} from '../../components/Button';
import Footer from '../../Layout/Footer';
import {AgencyNav} from '../../Layout/AgencyNav';

const DownloadAgency = () => {
  return (
    <div>
      <AgencyNav />

      <section className='download-agency'>
        <div className='container'>
          <img
            data-aos='fade-up'
            src='/img/two_phones.png'
            alt=''
            className='img-fluid download-img'
          />

          <div className='download-text'>
            <h5>
              Thanks for signing up. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt, nostrum!
            </h5>

            <h1>
              Download Para<span className='pay-color'>Pay</span>
            </h1>
            <a href=''>
              <div class='agency-btn-large-primary'>
                <img
                  src='/img/icons/flat-ui_google.svg'
                  alt=''
                  className='img-fluid'
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
      <Footer />
    </div>
  );
};

export default DownloadAgency;
