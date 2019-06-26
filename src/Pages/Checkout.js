import React from 'react';
import { styled } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import Header1 from '../components/Header1';
import GradientButton from '../components/GradientButton';

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

export default () => (
  <CenteredContainer>
    <Header1>Checkout</Header1>
    <From autoComplete="off">
      <FieldsContainer>
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Phone" />
      </FieldsContainer>
      <GradientButton disabled>Checkout</GradientButton>
    </From>
  </CenteredContainer>
);
