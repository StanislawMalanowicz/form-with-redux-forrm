import React from "react";
import { Field, reduxForm } from "redux-form";
import {  connect } from 'react-redux'
import RenderField from './RenderField'
import actions from '../duck/actions'

 const validate = values => {
   const errors = {};
    const emailRegex = /@/gm;

   if (!values.password) {
     errors.password = "Required";
   } else if (values.password.length < 6) {
     errors.password = "Must be 6 characters or more";
   }

   if(!values.email) {
       errors.email = "Required"
   } else if (!emailRegex.test(values.email)) {
        errors.email = '"@" required '
   }

   if(!values.secondPassword){
       errors.secondPassword = "Required";
   } else if(values.password !== values.secondPassword){
       errors.secondPassword = "Wrong Password";
   }

   return errors;
 };




let ContactForm = props => {
  const { handleSubmit, dirty, submitting } = props;

  const submit = values => {

    //   console.log(values);
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              console.log(values)
              props.addData(values)
              resolve()
          }, 2000)
      })
    };

   

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Field name="email" type="email" component={RenderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={RenderField}
        label="Password"
      />
      <Field
        name="secondPassword"
        type="password"
        component={RenderField}
        label="Confirm Password"
      />
      <button type="submit" disabled={!dirty || submitting}>
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addData: data => dispatch(actions.showConsole(data)),
  };
};


ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
  validate
})(ContactForm);

export default connect(null, mapDispatchToProps)(ContactForm);
