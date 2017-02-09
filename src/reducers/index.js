import { combineReducers } from 'redux';
import change from './auth';


const rootReducer = combineReducers({
	authenticated:change
})

export default rootReducer;
