import * as actions from './ActionsTypes';

const initialState = {
	movies: [],
	watchlist: window.localStorage.getItem('watchlist') ? JSON.parse(window.localStorage.getItem('watchlist')) : [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case actions.ADD_TO_WATCHLIST:
			const newMovie = [...state.watchlist, action.payload];
			window.localStorage.setItem('watchlist', JSON.stringify(newMovie));
			return {
				...state,
				watchlist: newMovie,
			};
		default:
			return state;
	}
};
