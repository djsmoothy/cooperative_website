import React from 'react';

export const SeamlessCards = ({aosdata, classprops, iconpath, title, text}) => {
  return (
    <div data-aos={aosdata} className={`mycard-${classprops}`}>
      <div>
        <span>
          <img src={`${iconpath}`} alt='' className='d-inline' />
        </span>
        <h6 className='d-inline'>{title}</h6>
      </div>
      <p>{text}</p>
    </div>
  );
};

export const FeaturesCards = ({aosdata, imagepath, iconpath, title, text}) => {
  return (
    <div data-aos={aosdata} className='feature-card'>
      <img src={`${imagepath}`} alt='' className='img-fluid feature-card-img' />
      <img src={`${iconpath}`} alt='' className='img-fluid' />

      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};
