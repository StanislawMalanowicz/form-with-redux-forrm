const validate = values => {
  const errors = {};
  const emailRegex = /@/gm;

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 2) {
    errors.password = "Must be 2 characters or more";
    // !!! remember to change for 6 characters
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = '"@" required ';
  }

  if (!values.secondPassword) {
    errors.secondPassword = "Required";
  } else if (values.password !== values.secondPassword) {
    errors.secondPassword = "Wrong Password";
  }

  return errors;
};

export default validate