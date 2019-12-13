import React from 'react';
import { connect } from 'react-redux';
import { reducer as formReducer } from "redux-form";
// import TextField from "material-ui/TextField";
import  TextField  from "material-ui/TextField";




// const Renderender = (props) => {
//     const { input, label, type, meta: {touched, error, warning}} = props
//     return (
//         <div>
//             <label>{label}</label>
//             <div>
//                 <input {...input} placeholder={label} type={type} />
//                 {touched &&
//                     ((error && <span>{error}</span>) ||
//                         (warning && <span>{warning}</span>))}
//             </div>
//         </div>
//     );
// }


const RenderField = props => {
    const {
        input,
        label,
        type,
        meta: { touched, error, warning }
    } = props

    // const handleChange =() => {
    //     console.log("should work value: ", props.personalInfo)
    // }
    // onChange = { handleChange }
    // console.log('interensting:)...',  formReducer())
    return (
        <div>
            <label>{label}</label>
            <div>
                <TextField {...input} placeholder={label} type={type}   />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}

// const mapDispatchToProps = dispatch => {
//     // return {
//     //     addData: data => dispatch(actions.showConsole(data)),
//     // };
// };

const mapStateToProps = (state) => {
    return ({
        personalInfo: state
    })
}



export default connect(mapStateToProps, {})(RenderField)


// to do: 
//       - how to get a state from, try TextField from material.ui