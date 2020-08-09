import * as types from '../actions/actionTypes';

let initialState = {
	data: '',
};

export default function getShivaniInfo(state = initialState, action) {
	switch (action.type) {
		case types.GET_SHIVANI_STATE:
			return {
				data: action.payload,
			};

		default:
			return state;
	}
}

// state, action
// pure function
