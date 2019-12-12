import React from 'react';
import { connect } from 'react-redux'
import actions from '../duck/actions'

const Form = (props) => {
    const handleClick = () => {
        props.sayHi()
    }
    return ( 
            <div>
                <h1>i am form</h1>
                <button onClick={handleClick}>klik</button>
            </div>
     );
}

const mapDispatchToProps = dispatch => {
    return({
        sayHi: () => dispatch(actions.showConsole())
    })
}

 
export default connect(null, mapDispatchToProps)(Form);       