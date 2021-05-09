import {v4 as uuidv4} from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from './types';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();

  var newMsg = Object.keys(msg).map((key) => [Number(key), msg[key]]);

  dispatch({
    type: SET_ALERT,
    payload: {newMsg, alertType, id},
  });

  setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
};
