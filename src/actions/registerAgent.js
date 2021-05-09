import axios from 'axios';
import {setAlert} from './alert';

import {
  submitPersonalInformation,
  submitMeansOfIdentification,
  submitBusinessInformation,
  submitToken,
  loadingTrue,
  loadingFalse,
} from './progressState';

import {
  POST_PERSONAL_INFORMATION_SUCCESS,
  POST_PERSONAL_INFORMATION_FAIL,
  GET_STATE_SUCCESS,
  GET_STATE_FAIL,
  GET_LGA_SUCCESS,
  GET_LGA_FAIL,
  POST_VALIDATE_PHONE_SUCCESS,
  POST_VALIDATE_PHONE_FAIL,
  POST_MEANS_OF_IDENTIFICATION_SUCCESS,
  POST_MEANS_OF_IDENTIFICATION_FAIL,
  GET_ID_TYPE_SUCCESS,
  GET_ID_TYPE_FAIL,
  POST_BUSINESS_INFORMATION_SUCCESS,
  POST_BUSINESS_INFORMATION_FAIL,
  POST_SECURITY_DETAILS_SUCCESS,
  POST_SECURITY_DETAILS_FAIL,
} from './types';

export const getState = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/fetch-all-state'
    );

    dispatch({
      type: GET_STATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_STATE_FAIL,
    });
  }
};

export const getLga = (nameOfState) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://parapay-agency.herokuapp.com/api/v1/onboarding/${nameOfState}/state-lgas`
    );

    dispatch({
      type: GET_LGA_SUCCESS,
      payload: res.data.lgas,
    });
  } catch (error) {
    dispatch({
      type: GET_LGA_FAIL,
    });
  }
};

export const postPersonalInformation = (formData) => async (dispatch) => {
  dispatch(loadingTrue({}));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/store-basic-information',
      body,
      config
    );

    dispatch({
      type: POST_PERSONAL_INFORMATION_SUCCESS,
      payload: res.data,
    });

    dispatch(submitPersonalInformation({}));

    dispatch(loadingFalse({}));
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    console.log(msg);

    dispatch({
      type: POST_PERSONAL_INFORMATION_FAIL,
    });

    dispatch(loadingFalse({}));
  }
};

export const postValidateToken = (formData, history) => async (dispatch) => {
  dispatch(loadingTrue({}));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/validate-user-phone',
      body,
      config
    );

    dispatch({
      type: POST_VALIDATE_PHONE_SUCCESS,
      payload: res.data,
    });

    dispatch(submitToken({}));

    dispatch(loadingFalse({}));

    history.push('/agency/registermoi');
  } catch (error) {
    const msg = error.response.data.message;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: POST_VALIDATE_PHONE_FAIL,
    });

    dispatch(loadingFalse({}));
  }
};

export const getIdTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/id-types'
    );

    dispatch({
      type: GET_ID_TYPE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ID_TYPE_FAIL,
    });
  }
};

export const postMeansOfIdentification = (formData, history) => async (
  dispatch
) => {
  dispatch(loadingTrue({}));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/store-account-information',
      body,
      config
    );

    dispatch({
      type: POST_MEANS_OF_IDENTIFICATION_SUCCESS,
      payload: res.data,
    });

    dispatch(submitMeansOfIdentification({}));

    dispatch(loadingFalse({}));

    history.push('/agency/registerbif');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: POST_MEANS_OF_IDENTIFICATION_FAIL,
    });

    dispatch(loadingFalse({}));
  }
};
export const postBusinessInformation = (formData, history) => async (
  dispatch
) => {
  dispatch(loadingTrue({}));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/store-business-information',
      body,
      config
    );

    dispatch({
      type: POST_BUSINESS_INFORMATION_SUCCESS,
      payload: res.data,
    });

    dispatch(submitBusinessInformation({}));

    dispatch(loadingFalse({}));

    history.push('/agency/registersd');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: POST_BUSINESS_INFORMATION_FAIL,
    });

    dispatch(loadingFalse({}));
  }
};

export const postSecurityDetails = (formData, history) => async (dispatch) => {
  dispatch(loadingTrue({}));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post(
      'https://parapay-agency.herokuapp.com/api/v1/onboarding/complete-signup',
      body,
      config
    );

    dispatch({
      type: POST_SECURITY_DETAILS_SUCCESS,
      payload: res.data,
    });

    dispatch(loadingFalse({}));

    history.push('/agency/download');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: POST_SECURITY_DETAILS_FAIL,
    });

    dispatch(loadingFalse({}));
  }
};
