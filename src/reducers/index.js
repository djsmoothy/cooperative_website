import {combineReducers} from 'redux';
import personalInformationData from './personalInformationData';
import alert from './alert';
import progressState from './progressState';
import meansOfIdentification from './meansOfIdentification';
import businessInfo from './businessInfo';
import securityDetails from './securityDetails';

export default combineReducers({
  personalInformationData,
  alert,
  progressState,
  meansOfIdentification,
  businessInfo,
  securityDetails,
});
