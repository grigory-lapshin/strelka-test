import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import Header1 from '../components/Header1';
import LinkedButton from '../components/LinkedButton';
import { checkout } from '../actions';

const CenteredContainer = styled(Container)({
  padding: '6em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const From = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const FieldsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  marginBottom: '2em',
});

const Checkout = ({ checkout }) => (
  <CenteredContainer>
    <Header1>Checkout</Header1>
    <From autoComplete="off">
      <FieldsContainer>
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Phone" />
      </FieldsContainer>
      <LinkedButton to="/thnx" onClick={() => checkout()}>
        Checkout
      </LinkedButton>
    </From>
  </CenteredContainer>
);

export default connect(
  () => {},
  { checkout },
)(Checkout);
