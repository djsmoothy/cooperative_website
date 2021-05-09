import React, {useState, useEffect} from 'react';
import Footer from '../../Layout/Footer';
import {connect, useSelector} from 'react-redux';
import {AgencyNav} from '../../Layout/AgencyNav';
import Alert from '../../Layout/Alert';
import ProgressState from './ProgressState';
import {postSecurityDetails} from '../../actions/registerAgent';
import {setAlert} from '../../actions/alert';

const SecurityDetailsForm = ({
  meansOfIdentification: {
    meansOfIdentificationData: {new_hash},
    meansOfIdentificationLoading,
  },
  progressState: {formLoading},

  postSecurityDetails,
  setAlert,
  history,
}) => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  useEffect(() => {
    setFormData({
      user_hash: meansOfIdentificationLoading || !new_hash ? '' : new_hash,
    });
  }, [meansOfIdentificationLoading]);

  const [formData, setFormData] = useState({
    email: '',
    pin: '',
    user_hash: '',
  });

  const [pinData, setPinData] = useState({
    pin2: '',
  });

  const {email, pin, user_hash} = formData;
  const {pin2} = pinData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePin = (e) => {
    setPinData({
      ...pinData,
      pin2: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (pin !== pin2) {
      setAlert({msg: 'pin does not match'}, 'danger');
    } else {
      console.log(formData);
      postSecurityDetails(formData, history);
    }
  };

  return (
    <div>
      <AgencyNav />
      <Alert />
      <section className='registration-form'>
        <div className='container'>
          <h1>Register</h1>

          <ProgressState />
          <div className='card  register-form-card'>
            <h3>Security Details</h3>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group-grid'>
                <div>
                  <div className='form-group'>
                    <label>Email Address</label>
                    <input
                      className='form-control'
                      placeholder='Email Address'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Re-enter your pin</label>
                    <input
                      className='form-control'
                      placeholder='Re-enter your pin'
                      type='ID Number'
                      inputMode='numeric'
                      pattern='[-+]?[0-9]*[.,]?[0-9]+'
                      name='pin'
                      value={pin}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className='form-group'>
                    <label>6-digit login pin</label>
                    <input
                      className='form-control'
                      placeholder='6-digit login pin'
                      type='ID Number'
                      inputMode='numeric'
                      pattern='[-+]?[0-9]*[.,]?[0-9]+'
                      name='pin2'
                      value={pin2}
                      onChange={(e) => onChangePin(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='pendingplan'
                    required
                  />
                  <label className='display-20'>
                    I agree with the Terms of Service & Privacy Policy
                  </label>
                </div>
              </div>

              {formLoading ? (
                <div className='form-group'>
                  <div className='text-center form-loading'>
                    <img
                      src='/img/loader/loader.gif'
                      alt=''
                      className='img-fluid inner-image'
                    />
                  </div>
                </div>
              ) : (
                <div className='form-group'>
                  <input
                    type='submit'
                    className='register-form-btn form-control'
                    value='Next'
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  meansOfIdentification: state.meansOfIdentification,
  progressState: state.progressState,
});

export default connect(mapStateToProps, {postSecurityDetails, setAlert})(
  SecurityDetailsForm
);
