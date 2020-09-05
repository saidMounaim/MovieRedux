import * as actions from './ActionsTypes';

export const fetchMoviesAction = (movies) => {
	return {
		type: actions.FETCH_MOVIES,
		payload: movies,
	};
};

export const addWatchListAction = (movie) => {
	return {
		type: actions.ADD_TO_WATCHLIST,
		payload: movie,
	};
};
