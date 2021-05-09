import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
  });

  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(true);

  const {email, name} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const subscribeUser = async (formdata) => {
    setLoading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post(
        'https://parapay.herokuapp.com/api/v1/subscription',
        formdata,
        config
      );

      setLoading(false);

      setSubmitted(false);

      setTimeout(() => setSubmitted(true), 5000);

      setFormData({});
    } catch (error) {
      setLoading(false);

      setFormError('active');

      setTimeout(() => setFormError(null), 5000);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    subscribeUser(formData);
  };

  return (
    <div>
      <section className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <div>
              <Link to='/home'>
                <img
                  src='/img/footer_logo.svg'
                  alt=''
                  className='img-fluid mb-3'
                />
              </Link>

              <p>
                ParaPay is a flagship product of Canary Tech Limited – a
                Technology company registered with the Corporate Affairs
                Commission in Nigeria with Registration Certificate Number
                163003.
              </p>

              <p>
                Our Banking and Card services powered by Rubies MFB – a CBN
                licensed financial institution and NDIC member.
              </p>
            </div>

            <div className='third-item'>
              <h5>About</h5>
              <p>
                {' '}
                <Link to='/about' className='textwhite'>
                  Parapay
                </Link>
              </p>
              <p>
                {' '}
                <Link to='/faq' className='textwhite'>
                  FAQ
                </Link>
              </p>
            </div>
            <div>
              <h5>Legal</h5>
              <p>
                {' '}
                <a className='textwhite' href='https://parapay.io/terms.html'>
                  Terms and condition
                </a>{' '}
              </p>
              <p>
                {' '}
                <a className='textwhite' href='https://parapay.io/privacy.html'>
                  Privacy
                </a>{' '}
              </p>
            </div>
            <div>
              <h5>Stay connected</h5>
              <p>Receive promotional updates straight to your inbox</p>

              {submitted ? (
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter name'
                      name='name'
                      value={name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className='input-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter email address'
                      name='email'
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  {formError && (
                    <div className='input-group'>
                      <p>The email has already been subscribed</p>
                    </div>
                  )}
                  {loading ? (
                    <button
                      className='btn btn-block btn-outline-secondary'
                      type='submit'
                    >
                      <img
                        src='./img/loader/loader.gif'
                        alt=''
                        className='img-fluid inner-image'
                      />
                    </button>
                  ) : (
                    <button
                      className='btn btn-block btn-outline-secondary'
                      type='submit'
                    >
                      Sign up
                    </button>
                  )}
                </form>
              ) : (
                <img
                  src='/img/subscribe/subscribeImg.png'
                  alt=''
                  className='img-fluid'
                  data-aos='fade-up'
                />
              )}

              <div>
                <div className='footer-icons'>
                  <a href='https://www.facebook.com/MyParaApp/'>
                    <img src='/img/icons/footerfacebook.svg' alt='' />
                  </a>
                  <a href='https://twitter.com/myparaapp'>
                    <img src='/img/icons/footertwiter.svg' alt='' />
                  </a>
                  <a href='https://www.linkedin.com/company/parapay/'>
                    <img src='/img/icons/footerlinkedin.svg' alt='' />
                  </a>
                  <a href='https://www.instagram.com/myparaapp/?hl=en'>
                    <img src='/img/icons/footerinsta.svg' alt='' />
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
