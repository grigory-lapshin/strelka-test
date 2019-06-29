import React from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import CheckoutButton from './CheckoutButton';

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

const Spacer = styled('div')({
  padding: '1em 0 ',
});

function validateName(name) {
  const re = /^[a-zA-Z ]{4,}$/;
  return re.test(String(name));
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
  return re.test(String(phone).toLowerCase());
}

const ContactsForm = ({ history }) => (
  <Formik
    initialValues={{ email: '', name: '', phone: '' }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.phone) {
        errors.phone = 'Required';
      } else if (!validateName(values.name)) {
        errors.name = 'Too short name';
      } else if (!validateEmail(values.email)) {
        errors.email = 'Invalid email address';
      } else if (!validatePhone(values.phone)) {
        errors.phone = 'Invalid phone';
      }
      return errors;
    }}
    onSubmit={(_, { setSubmitting }) => {
      setSubmitting(false);
      history.push('thnx');
    }}
  >
    {({
      values, errors, touched, handleChange, handleBlur, handleSubmit,
    }) => (
      <From onSubmit={handleSubmit}>
        <FieldsContainer>
          <TextField
            name="name"
            label="Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            margin="normal"
          />
          {errors.name && touched.name && errors.name}
          <TextField
            name="email"
            label="Email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            margin="normal"
          />
          {errors.email && touched.email && errors.email}
          <TextField
            name="phone"
            label="Phone"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            margin="normal"
          />
          {errors.phone && touched.phone && errors.phone}
          <Spacer />
          <CheckoutButton
            type="submit"
            disabled={
              !touched.name
              || !!errors.name
              || !touched.email
              || !!errors.email
              || !touched.phone
              || !!errors.phone
            }
          >
            Proced
          </CheckoutButton>
        </FieldsContainer>
      </From>
    )}
  </Formik>
);

export default withRouter(ContactsForm);
