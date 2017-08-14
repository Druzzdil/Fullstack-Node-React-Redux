import {combineReducers} from 'redux';
import authRedcuer from './authReducer';

export default combineReducers({
    auth: authRedcuer
});