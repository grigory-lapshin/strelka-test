import React from 'react';
import { styled } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header1 from '../components/Header1';
import GradientButton from '../components/GradientButton';

const CenteredContainer = styled(Container)({
  padding: '6em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export default () => (
  <CenteredContainer>
    <Header1>Thank you!</Header1>
    <Link to="/">
      <GradientButton>Back to store</GradientButton>
    </Link>
  </CenteredContainer>
);
