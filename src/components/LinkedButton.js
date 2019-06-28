import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { isValid, getFormValues } from 'redux-form';
import GradientButton from './GradientButton';
import { checkout } from '../actions';

const CheckoutButtonTemplate = ({
  history,
  to,
  onClick,
  children,
  disabled,
  valid,
  checkout,
  values,
}) => (
  <GradientButton
    disabled={disabled}
    onClick={(event) => {
      if (onClick) onClick(event);
      if (valid && checkout) checkout();
      if (to) history.push(to);
    }}
  >
    {children}
  </GradientButton>
);

const CheckoutButton = withRouter(CheckoutButtonTemplate);

export default connect(
  state => ({ valid: isValid('contact')(state), values: getFormValues('contact')(state) }),
  {
    checkout,
  },
)(CheckoutButton);

// export default CheckoutButton;
