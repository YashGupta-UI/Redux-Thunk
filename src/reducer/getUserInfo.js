import * as types from '../actions/actionTypes';

let initialState = {
	apiData: [],
	error: false,
};

export default function getUserInfo(state = initialState, action) {
	switch (action.type) {
		case types.GET_USER_DATA:
			return {
				apiData: [],
				error: false,
			};
		case types.GET_USER_DATA_SUCCESS:
			return {
				apiData: action.payload,
				error: false,
			};

		case types.GET_USER_DATA_FAILURE:
			return {
				apiData: [],
				error: true,
			};

		default:
			return state;
	}
}

// state, action
// pure function
