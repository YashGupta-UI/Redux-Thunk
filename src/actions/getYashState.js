import * as types from './actionTypes';

export function getYashData(userdata) {
	return {
		type: types.GET_YASH_STATE,
		payload: userdata,
	};
}

// type and payload
