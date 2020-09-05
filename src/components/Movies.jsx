import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../redux/Actions';
import MoviesApi from '../services/MoviesApi';
import MovieCard from './MovieCard';

const Movies = () => {
	const { movies } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	const fetchMovies = async () => {
		try {
			const data = await MoviesApi.getMovies();
			dispatch(fetchMoviesAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div className="container">
			<h1 className="mt-4 mb-4">Movies</h1>
			<div className="row">{movies && movies.map((movie) => <MovieCard movie={movie} />)}</div>
		</div>
	);
};

export default Movies;
