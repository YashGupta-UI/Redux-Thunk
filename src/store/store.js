import { createStore, combineReducers, applyMiddleware } from 'redux';
import getShivaniInfo from '../reducer/getShivaniInfo';
import getYashInfo from '../reducer/getYashInfo';
import getUserInfo from '../reducer/getUserInfo';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	getShivaniInfo,
	getYashInfo,
	getUserInfo,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
