import { combineReducers } from 'redux';
import { moviesReducer } from './Reducers';

export const allReducers = combineReducers({
	movies: moviesReducer,
});
