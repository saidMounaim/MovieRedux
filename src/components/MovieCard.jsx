import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWatchListAction } from '../redux/Actions';

const MovieCard = ({ movie }) => {
	const { watchlist } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	return (
		<div className="col-md-4 col-sm-6 col-xs-12" key={movie.id}>
			<div className="card-header">
				<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
			</div>
			<div className="card-body">
				<button
					onClick={() => dispatch(addWatchListAction(movie))}
					className="btn btn-primary"
					disabled={watchlist.find((m) => m.id == movie.id) ? `disabled` : false}
				>
					Watchlist
				</button>
				<button className="btn btn-info">Watched</button>
			</div>
		</div>
	);
};

export default MovieCard;
