import React, { useState, useEffect } from "react";
import Footer from "../../Layout/Footer";
import { connect, useSelector } from "react-redux";
import { AgencyNav } from "../../Layout/AgencyNav";
import Alert from "../../Layout/Alert";
import ProgressState from "./ProgressState";
import { postBusinessInformation } from "../../actions/registerAgent";

const BussinessInformationForm = ({
  meansOfIdentification: {
    meansOfIdentificationData: { new_hash },

    meansOfIdentificationLoading,
  },
  progressState: { formLoading },

  postBusinessInformation,
  history,
}) => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  useEffect(() => {
    setBusinessInformationFormData({
      user_hash: meansOfIdentificationLoading || !new_hash ? "" : new_hash,
    });
  }, [meansOfIdentificationLoading]);

  const [
    businessInformationFormData,
    setBusinessInformationFormData,
  ] = useState({
    business_name: "",
    business_addr: "",
    nature_of_business: "",
    rc_number: "",
    is_business_registered: false,
    agency_phone: "",
    user_hash: "",
  });

  const {
    business_name,
    business_addr,
    nature_of_business,
    rc_number,
    is_business_registered,
    agency_phone,
    user_hash,
  } = businessInformationFormData;

  const onChangeBusinessInformationFormData = (e) => {
    setBusinessInformationFormData({
      ...businessInformationFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitBussinessInformation = (e) => {
    e.preventDefault();

    console.log(businessInformationFormData);

    console.log(new_hash);

    postBusinessInformation(businessInformationFormData, history);

    ScrollToTop();
  };

  return (
    <div>
      <AgencyNav />
      <Alert />
      <section className="registration-form">
        <div className="container">
          <h1>Register</h1>

          <ProgressState />
          <div className="card  register-form-card">
            <h3>Bussiness Information</h3>
            <form onSubmit={(e) => onSubmitBussinessInformation(e)}>
              <div className="form-group-grid">
                <div>
                  <div className="form-group">
                    <label>Business Name</label>
                    <input
                      className="form-control"
                      placeholder="Nature of Bussiness"
                      type="text"
                      name="business_name"
                      value={business_name}
                      onChange={(e) => onChangeBusinessInformationFormData(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Business Address</label>
                    <input
                      className="form-control"
                      placeholder="Nature of Bussiness"
                      type="text"
                      name="business_addr"
                      value={business_addr}
                      onChange={(e) => onChangeBusinessInformationFormData(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>RC Number</label>
                    <input
                      className="form-control"
                      placeholder="RC Number"
                      type="text"
                      inputMode="numeric"
                      pattern="[-+]?[0-9]*[.,]?[0-9]+"
                      name="rc_number"
                      value={rc_number}
                      onChange={(e) => onChangeBusinessInformationFormData(e)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <p>Is the company Registered?</p>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="inlineRadio1"
                        name="is_business_registered"
                        value={is_business_registered}
                        checked={is_business_registered}
                        onChange={(e) =>
                          setBusinessInformationFormData({
                            ...businessInformationFormData,
                            is_business_registered: true,
                          })
                        }
                        required
                      ></input>
                      <label class="form-check-label" for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="inlineRadio1"
                        name="is_business_registered"
                        value={is_business_registered}
                        checked={is_business_registered}
                        onChange={(e) =>
                          setBusinessInformationFormData({
                            ...businessInformationFormData,
                            is_business_registered: false,
                          })
                        }
                        required
                      ></input>
                      <label class="form-check-label" for="inlineRadio1">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Nature of Bussiness</label>
                    <input
                      className="form-control"
                      placeholder="Nature of Bussiness"
                      type="text"
                      name="nature_of_business"
                      value={nature_of_business}
                      onChange={(e) => onChangeBusinessInformationFormData(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Agency / Registered Phone Number</label>
                    <input
                      className="form-control"
                      placeholder="Agency / Registered Phone Number"
                      type="text"
                      name="agency_phone"
                      value={agency_phone}
                      onChange={(e) => onChangeBusinessInformationFormData(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              {formLoading ? (
                <div className="form-group">
                  <div className="text-center form-loading">
                    <img
                      src="/img/loader/loader.gif"
                      alt=""
                      className="img-fluid inner-image"
                    />
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <input
                    type="submit"
                    className="register-form-btn form-control"
                    value="Next"
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

export default connect(mapStateToProps, { postBusinessInformation })(
  BussinessInformationForm
);
