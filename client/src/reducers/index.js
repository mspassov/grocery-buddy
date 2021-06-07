 import {combineReducers} from 'redux';
 import itemReducer from './itemReducer';

 export default combineReducers({
     item: itemReducer
 });

 //Add all the reducers here, as they become built
 //Basically like a meeting place for reducers