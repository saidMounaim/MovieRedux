import * as actions from './ActionsTypes';

const initialState = {
	movies: [],
	favourite: window.localStorage.getItem('favourite') ? JSON.parse(window.localStorage.getItem('favourite')) : [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case actions.ADD_TO_FAVOURITE:
			const newMovie = [...state.favourite, action.payload];
			window.localStorage.setItem('favourite', JSON.stringify(newMovie));
			return {
				...state,
				favourite: newMovie,
			};
		case actions.REMOVE_FROM_FAVOURITE:
			const originalFav = state.favourite;
			const filtredFav = originalFav.filter((f) => f.id !== action.payload);
			return {
				...state,
				favourite: filtredFav,
			};
		default:
			return state;
	}
};
