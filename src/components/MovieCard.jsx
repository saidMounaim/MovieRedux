import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteAction, RemoveFromFavouriteAction } from '../redux/Actions';

const MovieCard = ({ movie }) => {
	const { favourite } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	return (
		<div className="col-md-4 col-sm-6 col-xs-12" key={movie.id}>
			<div className="card-header">
				<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
			</div>
			<div className="card-body">
				<button
					onClick={() =>
						dispatch(
							favourite.find((m) => m.id == movie.id)
								? RemoveFromFavouriteAction(movie.id)
								: addFavouriteAction(movie)
						)
					}
					className={`btn btn-` + (favourite.find((m) => m.id == movie.id) ? `danger` : `info`)}
				>
					{favourite.find((m) => m.id == movie.id) ? `Remove From Favourite` : `Add To Favourite`}
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
