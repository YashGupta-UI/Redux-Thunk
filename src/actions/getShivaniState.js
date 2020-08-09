import * as types from './actionTypes';

export function getData(userdata) {
	return {
		type: types.GET_SHIVANI_STATE,
		payload: userdata,
	};
}

// type and payload
