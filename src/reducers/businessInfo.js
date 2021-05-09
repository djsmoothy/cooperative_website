import {
  POST_BUSINESS_INFORMATION_SUCCESS,
  POST_BUSINESS_INFORMATION_FAIL,
} from '../actions/types';

const initialState = {
  businessInfoLoading: true,
  businessInfoData: {},
  errorData: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case POST_BUSINESS_INFORMATION_SUCCESS:
      return {
        ...state,
        businessInfoData: payload,
        businessInfoLoading: false,
      };

    case POST_BUSINESS_INFORMATION_FAIL:
      return {
        ...state,
        errorData: payload,
      };

    default:
      return state;
  }
}
