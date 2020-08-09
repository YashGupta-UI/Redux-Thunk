import * as types from './actionTypes';

export function getUserDataType() {
	return {
		type: types.GET_USER_DATA,
	};
}

export function getUserDataSuccess(data) {
	return {
		type: types.GET_USER_DATA_SUCCESS,
		payload: data,
	};
}

export function getUserDataFailure(error) {
	return {
		type: types.GET_USER_DATA_FAILURE,
		payload: error,
	};
}

// Action Creator

export function getUserData(url) {
	console.log('url', url);
	return function(dispatch) {
		dispatch(getUserDataType());
		return fetch(url)
			.then(response => response.json())
			.then(result => dispatch(getUserDataSuccess(result)))
			.catch(error => {
				dispatch(getUserDataFailure(error));
			});
	};
}
