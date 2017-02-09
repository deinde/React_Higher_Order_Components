// import {CHANGE_AUTH} from './types';

export const CHANGE_AUTH='CHANGE_AUTH';


export function authenticate(due){
	console.log('THis is booliean true or false!!!!!',due);
		console.log('THis is CHANGE_AUTH or false!!!!!',CHANGE_AUTH);


	return{
		type:CHANGE_AUTH,
		payload:due
	}
}