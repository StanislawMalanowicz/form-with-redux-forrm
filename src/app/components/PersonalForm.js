import React from "react";
import { Field, reduxForm } from "redux-form";

 const validate = values => {
   const errors = {};

//    if (!values.password) {
//      errors.password = "Required";
//    } else if (values.password.length < 6) {
//      errors.password = "Must be 6 characters or more";
//    }

   if(!values.secondPassword){
       errors.secondPassword = "Required";
   } else if(values.password !== values.secondPassword){
       errors.secondPassword = "Wrong Password";
   }

   return errors;
 };

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);


let ContactForm = props => {
  const { handleSubmit, dirty, submitting } = props;

  const submit = values => {

    //   console.log(values);
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              console.log(values)
              resolve()
          }, 2000)
      })
    };

   

  return (
    <form onSubmit={handleSubmit(submit)}>
        {/* <Field name="email" type="email" component={renderField} label="Email" /> */}
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <Field name="secondPassword" type="password" component={renderField} label="Confirm Password" />
      <button type="submit" disabled={!dirty || submitting}>
        Submit
      </button>
    </form>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
  validate
})(ContactForm);

export default ContactForm;
