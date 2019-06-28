import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import {
  Field, reduxForm, submit as submitAction, isPristine, isInvalid,
} from 'redux-form';
import Header1 from '../components/Header1';
import LinkedButton from '../components/LinkedButton';
import { checkout } from '../actions';
import submit from '../actions/submit';

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

const FieldTemplate = styled(TextField)({ margin: '1em 0' });

const renderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <>
    <FieldTemplate {...input} placeholder={label} type={type} error={!!error} />
    {touched && error && <span>{error}</span>}
  </>
);

const ContactFormTemplate = ({ handleSubmit, error }) => (
  <From autoComplete="off" onSubmit={handleSubmit}>
    <FieldsContainer>
      <Field name="name" label="Name" component={renderField} type="text" />
      <Field name="email" label="Email" component={renderField} type="email" />
      <Field name="phone" label="Phone" component={renderField} type="text" />
      {error && <strong>{error}</strong>}
    </FieldsContainer>
  </From>
);

const ContactForm = reduxForm({
  form: 'contact',
  onSubmit: submit,
})(ContactFormTemplate);

const CheckoutButton = ({ onSubmit, disabled }) => (
  <LinkedButton onClick={onSubmit} disabled={disabled}>
    Proced
  </LinkedButton>
);

const Checkout = ({ onSubmit, pristine, invalid }) => (
  <CenteredContainer>
    <Header1>Checkout</Header1>
    <ContactForm />
    <CheckoutButton onSubmit={onSubmit} disabled={pristine} invalid={invalid} />
  </CenteredContainer>
);

const mapDispatchToProps = dispatch => ({
  checkout,
  onSubmit: () => dispatch(submitAction('contact')),
});

export default connect(
  state => ({ pristine: isPristine('contact')(state), invalid: isInvalid('contact')(state) }),
  mapDispatchToProps,
)(Checkout);
