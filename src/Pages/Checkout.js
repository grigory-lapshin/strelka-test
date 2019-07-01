import React, { useState } from 'react';
import { connect } from 'react-redux';
import { styled } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import Header1 from '../components/Header1';
import { checkout } from '../actions';
import ContactsForm from '../components/ContactsForm';

const CenteredContainer = styled(Container)({
  padding: '6em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const Checkout = () => (
  <CenteredContainer>
    <Header1>Checkout</Header1>
    <ContactsForm />
  </CenteredContainer>
);

const mapDispatchToProps = () => ({
  checkout,
});

export default connect(
  state => state,
  mapDispatchToProps,
)(Checkout);
