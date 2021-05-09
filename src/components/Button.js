import React from 'react';

export const ButtonGrid = ({aosdata}) => {
  return (
    <div data-aos={aosdata} className='button-grid'>
      <a href='https://play.google.com/store/apps/details?id=io.parapay.parapay'>
        <div className='btn-large-primary'>
          <img src='/img/icons/flat-ui_google.svg' alt='' />
          <div>
            <p>Available on</p>
            <h6>PLAYSTORE</h6>
          </div>
        </div>
      </a>
      <a href='https://apps.apple.com/app/id1548811572'>
        <div className='btn-large-secondary'>
          <img src='/img/icons/apple_icon.svg' alt='' />
          <div>
            <p>Available on</p>
            <h6>APP STORE</h6>
          </div>
        </div>
      </a>
    </div>
  );
};
