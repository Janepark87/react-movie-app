import PropTypes from 'prop-types';

function MovieDetails({ movie }) {
	return (
		<div className="movie">
			<img src={movie.medium_cover_image} alt={movie.title} />
			<h1 className="movie__title">
				{movie.title} <span className="movie__year">{movie.year}</span>
			</h1>
			<strong className="movie__rating">{movie.rating}/10</strong>
			<ul className="movie__genres">
				{movie.genres.map((genre, index) => (
					<li key={index} className="genre">
						{genre}
					</li>
				))}
			</ul>
			<p className="movie__summery">{movie.description_full}</p>
		</div>
	);
}

MovieDetails.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default MovieDetails;
