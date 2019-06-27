import React from 'react';
import { withRouter } from 'react-router-dom';
import GradientButton from './GradientButton';

const CheckoutButtonTemplate = ({
  history, to, onClick, children, disabled,
}) => (
  <GradientButton
    disabled={disabled}
    onClick={(event) => {
      if (onClick) onClick(event);
      history.push(to);
    }}
  >
    {children}
  </GradientButton>
);

const CheckoutButton = withRouter(CheckoutButtonTemplate);

export default CheckoutButton;
