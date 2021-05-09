import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Alert = ({alerts}) => {
  return (
    alerts.length > 0 &&
    alerts !== null &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert  container mb-3 text-center`}>
        <i class='fas fa-exclamation'></i> {alert.newMsg}
      </div>
    ))
  );
};

Alert.prosTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
