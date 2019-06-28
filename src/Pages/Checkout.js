import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
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

const ContactFormTemplate = ({ handleSubmit }) => (
  <From autoComplete="off" onSubmit={handleSubmit}>
    <FieldsContainer>
      <Field name="Name" component={TextField} />
      <Field name="Email" component={TextField} />
      <Field name="NaEmailme" component={TextField} />
    </FieldsContainer>
  </From>
);

const ContactForm = reduxForm({
  form: 'contact',
})(ContactFormTemplate);

const Checkout = ({ checkout = () => {} }) => (
  <CenteredContainer>
    <Header1>Checkout</Header1>
    <ContactForm onSubmit={values => console.log(values)} />
    <LinkedButton to="/thnx" onClick={() => checkout()}>
      Checkout
    </LinkedButton>
  </CenteredContainer>
);

export default () => {
  console.log(ContactForm);
  return <ContactForm />;
};

// export default connect(
//   state => state,
//   { checkout },
// )(Checkout);
