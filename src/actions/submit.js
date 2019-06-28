import { SubmissionError } from 'redux-form';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
  return re.test(String(phone).toLowerCase());
}

export default function submit(values) {
  if (values.name && values.name.length < 4) {
    throw new SubmissionError({
      name: 'Name is too short',
      _error: 'Wrong format!',
    });
  } else if (values.email && !validateEmail(values.email)) {
    throw new SubmissionError({
      email: 'Wrong email',
      _error: 'Wrong format!',
    });
  } else if (values.phone && !validatePhone(values.phone)) {
    throw new SubmissionError({
      phone: 'Wrong phone',
      _error: 'Wrong format!',
    });
  } else {
    console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }
}
