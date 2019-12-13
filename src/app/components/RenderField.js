import React from 'react';
// import actions from '../duck/actions';
// import { connect } from 'react-redux';

// import { Field } from "redux-form";
// import TextField from "material-ui/TextField";



// const handleChange =() => {
//   console.log("should work value: ")
// }
// onChange = { handleChange() }

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }   
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input}  placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default RenderField