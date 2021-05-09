import React, {useState, useEffect} from 'react';
import Footer from '../../Layout/Footer';
import {connect, useSelector} from 'react-redux';
import {AgencyNav} from '../../Layout/AgencyNav';
import Alert from '../../Layout/Alert';
import ProgressState from './ProgressState';
import {
  getIdTypes,
  postMeansOfIdentification,
} from '../../actions/registerAgent';

const MeansOfIdentificationForm = ({
  getIdTypes,
  postMeansOfIdentification,
  history,
  personalInformationData: {phone_validation_hash, phoneValidationLoading},
  progressState: {formLoading},
}) => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  useEffect(() => {
    setMeansOfIdentificationFormData({
      phone_hash:
        phoneValidationLoading || !phone_validation_hash
          ? ''
          : phone_validation_hash,
    });
  }, [phoneValidationLoading]);

  // useEffect(() => {
  //   getIdTypes();
  // }, [getIdTypes]);

  const [
    meansOfIdentificationFormData,
    setMeansOfIdentificationFormData,
  ] = useState({
    bvn: '',
    id_type: '',
    id_number: '',
    address: '',
    is_parapay_user: false,
    paratag: '',
    phone_hash: '',
  });

  const {
    bvn,
    id_type,
    id_number,
    address,
    is_parapay_user,
    paratag,
    phone_hash,
  } = meansOfIdentificationFormData;

  const onChangeMeansOfIdentificationFormData = (e) => {
    setMeansOfIdentificationFormData({
      ...meansOfIdentificationFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectedIdType = (idType) => {
    for (let i = 0; i < idType.length; i++) {
      setMeansOfIdentificationFormData({
        ...meansOfIdentificationFormData,
        id_type: idType[i].value,
      });
    }
  };

  const onSubmitMeansOfIdentification = (e) => {
    e.preventDefault();

    console.log(phone_validation_hash);

    console.log(meansOfIdentificationFormData);

    postMeansOfIdentification(meansOfIdentificationFormData, history);

    ScrollToTop();
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
            <h3>Means of Identification</h3>
            <form onSubmit={(e) => onSubmitMeansOfIdentification(e)}>
              <div className='form-group-grid'>
                <div>
                  <div className='form-group'>
                    <label>BVN</label>
                    <input
                      className='form-control'
                      name='bvn'
                      value={bvn}
                      onChange={(e) => onChangeMeansOfIdentificationFormData(e)}
                      placeholder='BVN'
                      type='text'
                      inputMode='numeric'
                      pattern='[-+]?[0-9]*[.,]?[0-9]+'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>ID Number</label>
                    <input
                      className='form-control'
                      placeholder='BVN'
                      name='id_number'
                      value={id_number}
                      onChange={(e) => onChangeMeansOfIdentificationFormData(e)}
                      type='ID Number'
                      inputMode='numeric'
                      pattern='[-+]?[0-9]*[.,]?[0-9]+'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <p>Are you a Parapay customer?</p>
                    <div class='form-check form-check-inline'>
                      <input
                        class='form-check-input'
                        type='radio'
                        id='inlineRadio1'
                        name='is_parapay_user'
                        value={is_parapay_user}
                        onChange={(e) =>
                          setMeansOfIdentificationFormData({
                            ...meansOfIdentificationFormData,
                            is_parapay_user: true,
                          })
                        }
                        required
                      ></input>
                      <label class='form-check-label' for='inlineRadio1'>
                        Yes
                      </label>
                    </div>
                    <div class='form-check form-check-inline'>
                      <input
                        class='form-check-input'
                        type='radio'
                        id='inlineRadio1'
                        name='is_parapay_user'
                        value={is_parapay_user}
                        onChange={(e) =>
                          setMeansOfIdentificationFormData({
                            ...meansOfIdentificationFormData,
                            is_parapay_user: false,
                          })
                        }
                        required
                      ></input>
                      <label class='form-check-label' for='inlineRadio1'>
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='form-group'>
                    <label>ID Type</label>

                    <select
                      className='custom-select'
                      onChange={(e) => {
                        handleSelectedIdType(e.target.selectedOptions);
                      }}
                      name='id_type'
                      value={id_type}
                      multiple={false}
                      required
                    >
                      <option value=''></option>
                      <option value='passport'>Passport</option>
                      <option value='travel_doc'>Travel Document</option>
                      <option value='national_id'>National ID</option>
                      <option value='driving_licencse'>Drivers Licencse</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Address On Means Of Identification</label>
                    <input
                      name='address'
                      value={address}
                      onChange={(e) => onChangeMeansOfIdentificationFormData(e)}
                      className='form-control'
                      placeholder='Address On Means Of Identification'
                      type='text'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Enter Paratag(Optional)</label>
                    <input
                      className='form-control'
                      name='paratag'
                      value={paratag}
                      onChange={(e) => onChangeMeansOfIdentificationFormData(e)}
                      placeholder='Enter Paratag(Optional)'
                      type='text'
                      required
                    />
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
  getIdTypes,
  postMeansOfIdentification,
})(MeansOfIdentificationForm);
