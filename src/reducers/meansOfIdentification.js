import {
  POST_MEANS_OF_IDENTIFICATION_SUCCESS,
  POST_MEANS_OF_IDENTIFICATION_FAIL,
  GET_ID_TYPE_SUCCESS,
  GET_ID_TYPE_FAIL,
} from '../actions/types';

const initialState = {
  meansOfIdentificationLoading: true,
  meansOfIdentificationData: {},
  id_types: {},
  id_types_loading: true,
  errorData: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case POST_MEANS_OF_IDENTIFICATION_SUCCESS:
      return {
        ...state,
        meansOfIdentificationData: payload,
        meansOfIdentificationLoading: false,
      };

    case GET_ID_TYPE_SUCCESS:
      return {
        ...state,
        id_types: payload,
        id_types_loading: false,
      };

    case POST_MEANS_OF_IDENTIFICATION_FAIL:
      return {
        ...state,
        errorData: payload,
      };
    case GET_ID_TYPE_FAIL:
      return {
        ...state,
        errorData: payload,
      };

    default:
      return state;
  }
}
