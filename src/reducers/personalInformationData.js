import {
  POST_PERSONAL_INFORMATION_SUCCESS,
  POST_PERSONAL_INFORMATION_FAIL,
  GET_STATE_SUCCESS,
  GET_STATE_FAIL,
  GET_LGA_SUCCESS,
  GET_LGA_FAIL,
  POST_VALIDATE_PHONE_SUCCESS,
  POST_VALIDATE_PHONE_FAIL,
} from '../actions/types';

const initialState = {
  personalInformationLoading: true,
  personalInformationData: {},
  stateLoading: true,
  lgaLoading: true,
  nigeriaState: {},
  phone_validation_hash: '',
  phoneValidationLoading: true,
  lga: {},
  errorData: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_STATE_SUCCESS:
      return {
        ...state,
        nigeriaState: payload,
        stateLoading: false,
      };

    case GET_LGA_SUCCESS:
      return {
        ...state,
        lga: payload,
        lgaLoading: false,
      };

    case POST_PERSONAL_INFORMATION_SUCCESS:
      return {
        ...state,
        personalInformationData: payload,
        personalInformationLoading: false,
      };
    case POST_PERSONAL_INFORMATION_FAIL:
      return {
        ...state,
        error: payload,
      };

    case GET_STATE_FAIL:
      return {
        ...state,
        errorData: payload,
        stateLoading: false,
      };

    case GET_LGA_FAIL:
      return {
        ...state,
        errorData: payload,
        lgaLoading: false,
      };
    case POST_VALIDATE_PHONE_SUCCESS:
      return {
        ...state,
        phone_validation_hash: payload.phone_validation_hash,
        phoneValidationLoading: false,
      };
    case POST_VALIDATE_PHONE_FAIL:
      return {
        ...state,
        errorData: payload,
        phoneValidationLoading: false,
      };

    default:
      return state;
  }
}
