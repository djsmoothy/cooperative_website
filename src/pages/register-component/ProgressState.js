import React from 'react';
import {connect} from 'react-redux';

const ProgressState = ({
  progressState: {
    formFilledEmpty1,
    formFilledIcon1,

    formFilledEmpty2,
    formFilledIcon2,
    formFilledLight2,

    formFilledEmpty3,
    formFilledIcon3,
    formFilledLight3,

    formFilledEmpty4,
    formFilledIcon4,
    formFilledLight4,

    progressLine1,
    progressLine2,
    progressLine3,

    textFaded1,
    textFaded2,
    textFaded3,
    textFaded4,
  },
}) => {
  return (
    <div className='progress-grid'>
      <div className='progress-grid-content'>
        <div className='progress-grid-content-number'>
          <p className='text-completed'>1</p>
          <div className='progress-circle'>
            {formFilledEmpty1 && (
              <img
                src='/img/agency/icons/formfilledempty.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledIcon1 && (
              <img
                src='/img/agency/icons/formfilledicon.svg'
                className='img-fluid'
                alt=''
              />
            )}
          </div>
        </div>
        <div className='text-line-grid'>
          <p className='text-completed'>Personal Information</p>
          <div
            className={progressLine1 ? 'progress-dotted-line' : 'progress-line'}
          ></div>
        </div>
      </div>
      <div className='progress-grid-content'>
        <div className='progress-grid-content-number'>
          <p className={textFaded2 ? 'text-faded' : 'text-completed'}>2</p>
          <div className='progress-circle'>
            {formFilledLight2 && (
              <img
                src='/img/agency/icons/formfilledlight.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledEmpty2 && (
              <img
                src='/img/agency/icons/formfilledempty.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledIcon2 && (
              <img
                src='/img/agency/icons/formfilledicon.svg'
                className='img-fluid'
                alt=''
              />
            )}
          </div>
        </div>
        <div className='text-line-grid'>
          <p className={textFaded2 ? 'text-faded' : 'text-completed'}>
            Identification
          </p>
          <div
            className={progressLine2 ? 'progress-dotted-line' : 'progress-line'}
          ></div>
        </div>
      </div>
      <div className='progress-grid-content'>
        <div className='progress-grid-content-number'>
          <p className={textFaded3 ? 'text-faded' : 'text-completed'}>3</p>
          <div className='progress-circle'>
            {formFilledLight3 && (
              <img
                src='/img/agency/icons/formfilledlight.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledEmpty3 && (
              <img
                src='/img/agency/icons/formfilledempty.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledIcon3 && (
              <img
                src='/img/agency/icons/formfilledicon.svg'
                className='img-fluid'
                alt=''
              />
            )}
          </div>
        </div>
        <div className='text-line-grid'>
          <p className={textFaded3 ? 'text-faded' : 'text-completed'}>
            Bussiness Information
          </p>
          <div
            className={progressLine3 ? 'progress-dotted-line' : 'progress-line'}
          ></div>
        </div>
      </div>
      <div className='progress-grid-content'>
        <div className='progress-grid-content-number'>
          <p className={textFaded4 ? 'text-faded' : 'text-completed'}>4</p>
          <div className='progress-circle'>
            {formFilledLight4 && (
              <img
                src='/img/agency/icons/formfilledlight.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledEmpty4 && (
              <img
                src='/img/agency/icons/formfilledempty.svg'
                className='img-fluid'
                alt=''
              />
            )}
            {formFilledIcon4 && (
              <img
                src='/img/agency/icons/formfilledicon.svg'
                className='img-fluid'
                alt=''
              />
            )}
          </div>
        </div>
        <div>
          <p className={textFaded4 ? 'text-faded' : 'text-completed'}>
            Security Details
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  progressState: state.progressState,
});
export default connect(mapStateToProps, {})(ProgressState);
