import React, {useState, useEffect} from 'react';
import Footer from '../Layout/Footer';
import {connect, useSelector} from 'react-redux';
import {AgencyNav} from '../Layout/AgencyNav';
import {
  getState,
  getLga,
  postPersonalInformation,
  postValidateToken,
} from '../actions/registerAgent';

import Alert from '../Layout/Alert';
import MeansOfIdentificationForm from './register-component/MeansOfIdentificationForm';
import BussinessInformationForm from './register-component/BussinessInformationForm';
import SecurityDetailsForm from './register-component/SecurityDetailsForm';
import ProgressState from './register-component/ProgressState';

// form component
// import {PersonalInformationForm} from '../components/Forms';
// import {MeansOfIdentificationForm} from '../components/Forms';
// import {BussinessInformationForm} from '../components/Forms';
// import {SecurityDetailsForm} from '../components/Forms';

const RegisterAgent = ({
  getState,
  getLga,
  postPersonalInformation,
  postValidateToken,
  history,
  progressState: {formLoading, personalInformation, tokenDetails},
  personalInformationData: {
    stateLoading,
    lgaLoading,
    nigeriaState,
    personalInformationLoading,
    lga: {lgas, senatorial_districts},
  },
}) => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  useEffect(() => {
    getState();
  }, [stateLoading]);

  // const [personalInformation, setPersonalInformation] = useState(true);
  // const [tokenDetails, setTokenDetails] = useState(false);

  const onSubmitPersonalInformation = (e) => {
    e.preventDefault();

    postPersonalInformation(personalInformationFormData);

    ScrollToTop();
  };

  const onSubmitEnterToken = (e) => {
    e.preventDefault();

    console.log(tokenDetailsFormData);

    postValidateToken(tokenDetailsFormData, history);

    ScrollToTop();
  };

  //Personal Information

  const [
    personalInformationFormData,
    setPersonalInformationFormData,
  ] = useState({
    firstname: '',
    surname: '',
    phone: '',
    dob: '',
    gender: '',
    state: '',
    lga: '',
    district: '',
  });

  const {
    firstname,
    surname,
    phone,
    dob,
    gender,
    state,
    lga,
    district,
  } = personalInformationFormData;

  const onChangePersonalInformationData = (e) => {
    setPersonalInformationFormData({
      ...personalInformationFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectedGender = (selectedGender) => {
    for (let i = 0; i < selectedGender.length; i++) {
      setPersonalInformationFormData({
        ...personalInformationFormData,
        gender: selectedGender[i].value,
      });
    }
  };

  const handleSelectedState = (selectedState) => {
    for (let i = 0; i < selectedState.length; i++) {
      setPersonalInformationFormData({
        ...personalInformationFormData,
        state: selectedState[i].value,
      });

      getLga(selectedState[i].value);
    }
  };

  const handleSelectedLga = (selectedLga) => {
    for (let i = 0; i < selectedLga.length; i++) {
      setPersonalInformationFormData({
        ...personalInformationFormData,
        lga: selectedLga[i].value,
      });
    }
  };

  const handleSelectedDistrict = (selectedDistrict) => {
    for (let i = 0; i < selectedDistrict.length; i++) {
      setPersonalInformationFormData({
        ...personalInformationFormData,
        district: selectedDistrict[i].value,
      });
    }
  };

  // Verify Token
  const [tokenDetailsFormData, setTokenDetailsFormData] = useState({
    phone: '',
    token: '',
  });

  const {token} = tokenDetailsFormData;

  const onChangeTokenDetailsFormData = (e) => {
    setTokenDetailsFormData({
      ...tokenDetailsFormData,
      [e.target.name]: e.target.value,
    });
  };
  const onChangePhoneFormData = (e) => {
    setTokenDetailsFormData({
      ...tokenDetailsFormData,
      phone: e.target.value,
    });

    setPersonalInformationFormData({
      ...personalInformationFormData,
      phone: e.target.value,
    });
  };

  return (
    <div>
      <AgencyNav />
      <Alert />
      <section className='registration-form'>
        <div className='container'>
          <h1>Register</h1>

          <ProgressState />

          {personalInformation && (
            <div className='card  register-form-card'>
              <h3>Please enter your personal information</h3>
              <form onSubmit={(e) => onSubmitPersonalInformation(e)}>
                <div className='form-group-grid'>
                  <div>
                    <div className='form-group'>
                      <label>First Name</label>
                      <input
                        type='text'
                        name='firstname'
                        value={firstname}
                        onChange={(e) => onChangePersonalInformationData(e)}
                        className='form-control'
                        placeholder='First Name'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label>Last Name</label>
                      <input
                        name='surname'
                        value={surname}
                        onChange={(e) => onChangePersonalInformationData(e)}
                        className='form-control'
                        placeholder='Last Name'
                        type='text'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Phone Number</label>
                      <input
                        className='form-control'
                        name='phone'
                        value={phone}
                        onChange={(e) => onChangePhoneFormData(e)}
                        placeholder='Phone Number'
                        type='text'
                        inputMode='numeric'
                        pattern='[-+]?[0-9]*[.,]?[0-9]+'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label>Gender</label>

                      <select
                        className='custom-select'
                        name='gender'
                        value={gender}
                        onChange={(e) => {
                          handleSelectedGender(e.target.selectedOptions);
                        }}
                        multiple={false}
                        required
                      >
                        <option value=''></option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className='form-group'>
                      <label>State of Origin</label>

                      <select
                        className='custom-select'
                        name='state'
                        value={state}
                        onChange={(e) => {
                          handleSelectedState(e.target.selectedOptions);
                        }}
                        multiple={false}
                        required
                      >
                        <option></option>
                        {!stateLoading &&
                          nigeriaState.states.map(($state) => (
                            <option key={$state.id} value={$state}>
                              {$state}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>Date of Birth</label>
                      <input
                        className='form-control'
                        name='dob'
                        value={dob}
                        onChange={(e) => onChangePersonalInformationData(e)}
                        type='date'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label>Local Government</label>

                      <select
                        className='custom-select'
                        name='lga'
                        value={lga}
                        onChange={(e) => {
                          handleSelectedLga(e.target.selectedOptions);
                        }}
                        multiple={false}
                        required
                      >
                        <option></option>
                        {!lgaLoading &&
                          lgas.map(($lga) => (
                            <option key={$lga.id} value={$lga}>
                              {$lga}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Senatorial District Name</label>

                      <select
                        className='custom-select'
                        name='district'
                        value={district}
                        onChange={(e) => {
                          handleSelectedDistrict(e.target.selectedOptions);
                        }}
                        multiple={false}
                        required
                      >
                        <option></option>
                        {!lgaLoading &&
                          senatorial_districts.map(($s_d) => (
                            <option key={$s_d.id} value={$s_d}>
                              {$s_d}
                            </option>
                          ))}
                      </select>
                    </div>
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
          )}

          {tokenDetails && (
            <div className='card  register-form-card'>
              <h3>Enter Token</h3>
              <form onSubmit={(e) => onSubmitEnterToken(e)}>
                <div className='form-group-grid'>
                  <div>
                    <div className='form-group'>
                      <label>
                        Enter Token sent to mobile number to continue
                        registration
                      </label>
                      <input
                        className='form-control'
                        name='token'
                        value={token}
                        onChange={(e) => onChangeTokenDetailsFormData(e)}
                        placeholder='Enter Token'
                        type='text'
                        inputMode='numeric'
                        pattern='[-+]?[0-9]*[.,]?[0-9]+'
                        required
                      />
                    </div>

                    <p className='resend-token'>Click to resend token</p>
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
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  personalInformationData: state.personalInformationData,
  progressState: state.progressState,
});

export default connect(mapStateToProps, {
  getState,
  getLga,
  postPersonalInformation,
  postValidateToken,
})(RegisterAgent);
