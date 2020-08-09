import * as types from '../actions/actionTypes';

let initialState = {
	nameData: '',
};

export default function getYashInfo(state = initialState, action) {
	switch (action.type) {
		case types.GET_YASH_STATE:
			return {
				data: action.payload,
			};

		default:
			return state;
	}
}
