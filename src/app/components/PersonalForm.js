import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import {  connect } from 'react-redux'
import RenderField from './RenderField'
import actions from '../duck/actions';
import validate from '../duck/validate'
import submit from './submit'

let ContactForm = props => {
  const { handleSubmit, dirty, submitting } = props;

  // const sendDataFromAPI = (formData) => {

  // }
      // const submit = values => {
      //     return new Promise((resolve, reject) => {
      //         setTimeout(() => {
      //             console.log(values)
      //             props.addData(values)
      //             resolve()
      //         }, 2000)
      //     })
      //   };
      // submit(values, props)


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
const mapStateToProps = (state) => {
  return ({
    personalInfo: state.person
  })
}



ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
  validate
})(ContactForm);

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
