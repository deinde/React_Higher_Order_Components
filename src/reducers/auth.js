/*import {CHANGE_AUTH} from '../actions/types';

console.log('inside reducer authitication',CHANGE_AUTH);



export default function(state=false, action){
	switch(action.type) {
		case CHANGE_AUTH:
		 return console.log('ok',action.payload);
	}
	return state;
}*/


import {CHANGE_AUTH} from '../actions/types';


  export default function(state = false, action){
	switch(action.type){
		case CHANGE_AUTH:
		 return action.payload
		}
		return state; 
}

