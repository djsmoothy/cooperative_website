import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <div>
              <img
                src='./img/footer_logo.svg'
                alt=''
                className='img-fluid mb-3'
              />
              <p>
                ParaPay is a flagship product of Canary Tech Limited – a
                Technology company registered with the Corporate Affairs
                Commission in Nigeria with Registration Certificate Number
                163003.
              </p>

              <p>
                Our Financial Technology System is powered by{' '}
                <a href='./facebook'>Rubies MFB</a> – a CBN licensed financial
                institution.
              </p>
            </div>

            <div className='third-item'>
              <h5>About</h5>
              <p>Parapay</p>
              <p>FAQ</p>
            </div>
            <div>
              <h5>Legal</h5>
              <p>Terms and condition</p>
              <p>Privacy</p>
            </div>
            <div>
              <h5>Stay connected</h5>
              <p>Receive promotional updates straight to your inbox</p>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter email address'
                />
                <div className='input-group-append'>
                  <button className='btn btn-outline-secondary' type='button'>
                    Sign up
                  </button>
                </div>
              </div>
              <div>
                <div className='footer-icons'>
                  <a href='https://mail.google.com'>
                    <img src='./img/icons/footerfacebook.svg' alt='' />
                  </a>
                  <a href='https://www.linkedin.com/in'>
                    <img src='./img/icons/footertwiter.svg' alt='' />
                  </a>
                  <a href='https://github.com'>
                    <img src='./img/icons/footerlinkedin.svg' alt='' />
                  </a>
                  <a href='https://twitter.com'>
                    <img src='./img/icons/footerinsta.svg' alt='' />
                  </a>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className='text-center copy'>
            <p>Copyright 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
