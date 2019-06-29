import React from 'react';
import { withRouter } from 'react-router-dom';
import GradientButton from './GradientButton';

const LinkedButton = ({
  history, to, onClick, children, disabled, type,
}) => (
  <GradientButton
    type={type}
    disabled={disabled}
    onClick={(event) => {
      if (onClick) onClick(event);
      if (to) history.push(to);
    }}
  >
    {children}
  </GradientButton>
);

export default withRouter(LinkedButton);
