import React from 'react';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';

export const CustomToggle = ({children, eventKey}) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <div className='custom-toggle' onClick={(e) => decoratedOnClick(e)}>
      {children}
    </div>
  );
};

export const CustomToggle2 = ({children, eventKey}) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <div className='custom-toggle' onClick={(e) => decoratedOnClick(e)}>
      {children}
    </div>
  );
};
