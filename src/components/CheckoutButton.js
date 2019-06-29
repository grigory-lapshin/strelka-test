import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import LinkedButton from './LinkedButton';

const CheckoutButtonTemplate = ({ checkoutAction, ...props }) => (
  <LinkedButton onClick={() => checkoutAction()} to="/thnx" {...props} />
);
export default connect(
  state => state,
  {
    checkoutAction: checkout,
  },
)(CheckoutButtonTemplate);
