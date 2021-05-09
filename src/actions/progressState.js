import {
  SUBMIT_PERSONAL_INFORMATION,
  SUBMIT_TOKEN,
  FORM_LOADING_TRUE,
  FORM_LOADING_FALSE,
  SUBMIT_MEANS_OF_IDENTIFICATION,
  SUBMIT_BUSINESS_INFORMATION,
} from '../actions/types';

export const submitPersonalInformation = () => (dispatch) => {
  dispatch({
    type: SUBMIT_PERSONAL_INFORMATION,
    payload: {},
  });
};
export const loadingTrue = () => (dispatch) => {
  dispatch({
    type: FORM_LOADING_TRUE,
    payload: {},
  });
};
export const loadingFalse = () => (dispatch) => {
  dispatch({
    type: FORM_LOADING_FALSE,
    payload: {},
  });
};

export const submitToken = () => (dispatch) => {
  dispatch({
    type: SUBMIT_TOKEN,
    payload: {},
  });
};
export const submitMeansOfIdentification = () => (dispatch) => {
  dispatch({
    type: SUBMIT_MEANS_OF_IDENTIFICATION,
    payload: {},
  });
};
export const submitBusinessInformation = () => (dispatch) => {
  dispatch({
    type: SUBMIT_BUSINESS_INFORMATION,
    payload: {},
  });
};
