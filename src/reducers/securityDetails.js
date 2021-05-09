import {
  POST_SECURITY_DETAILS_SUCCESS,
  POST_SECURITY_DETAILS_FAIL,
} from '../actions/types';

const initialState = {
  securityDetailsLoading: true,
  securityDetailsData: {},
  errorData: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case POST_SECURITY_DETAILS_SUCCESS:
      return {
        ...state,
        securityDetailsData: payload,
        securityDetailsLoading: false,
      };

    case POST_SECURITY_DETAILS_FAIL:
      return {
        ...state,
        errorData: payload,
      };

    default:
      return state;
  }
}
