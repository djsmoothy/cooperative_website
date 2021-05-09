import {
  SUBMIT_PERSONAL_INFORMATION,
  SUBMIT_TOKEN,
  FORM_LOADING_TRUE,
  FORM_LOADING_FALSE,
  SUBMIT_MEANS_OF_IDENTIFICATION,
  SUBMIT_BUSINESS_INFORMATION,
} from '../actions/types';

const initialState = {
  formFilledEmpty1: true,
  formFilledIcon1: false,

  formFilledEmpty2: false,
  formFilledIcon2: false,
  formFilledLight2: true,

  formFilledEmpty3: false,
  formFilledIcon3: false,
  formFilledLight3: true,

  formFilledEmpty4: false,
  formFilledIcon4: false,
  formFilledLight4: true,

  progressLine1: true,
  progressLine2: false,
  progressLine3: false,

  textFaded1: false,
  textFaded2: true,
  textFaded3: true,
  textFaded4: true,

  personalInformation: true,
  tokenDetails: false,
  meansOfIdentification: false,
  bussinessInformation: false,
  securityDetails: false,
  formLoading: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case FORM_LOADING_TRUE:
      return {
        ...state,
        formLoading: true,
      };
    case FORM_LOADING_FALSE:
      return {
        ...state,
        formLoading: false,
      };
    case SUBMIT_PERSONAL_INFORMATION:
      return {
        ...state,
        personalInformation: false,
        tokenDetails: true,
      };
    case SUBMIT_TOKEN:
      return {
        ...state,
        formFilledEmpty1: false,
        formFilledIcon1: true,

        formFilledLight2: false,
        formFilledEmpty2: true,

        progressLine1: false,
        progressLine2: true,

        textFaded2: false,

        personalInformation: false,
        tokenDetails: false,
        meansOfIdentification: true,
      };
    case SUBMIT_MEANS_OF_IDENTIFICATION:
      return {
        ...state,

        formFilledEmpty2: false,
        formFilledIcon2: true,

        formFilledLight3: false,
        formFilledEmpty3: true,

        progressLine2: false,
        progressLine3: true,

        textFaded3: false,

        meansOfIdentification: false,
        bussinessInformation: true,
      };
    case SUBMIT_BUSINESS_INFORMATION:
      return {
        ...state,

        formFilledEmpty3: false,
        formFilledIcon3: true,

        formFilledLight4: false,
        formFilledEmpty4: true,

        progressLine3: false,

        textFaded4: false,

        bussinessInformation: false,
        securityDetails: true,
      };

    default:
      return state;
  }
}
