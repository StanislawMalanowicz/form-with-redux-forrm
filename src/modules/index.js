import { combineReducers } from 'redux';
import{ routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import formFieldReducer from '../app/duck/reducers';

export default combineReducers({
    routing: routerReducer,
    form: formFieldReducer
})