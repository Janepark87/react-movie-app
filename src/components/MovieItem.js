import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MovieItem({ movie }) {
	const truncateText = (text) => {
		const MAX_STRING_LENGTH = 250;
		if (text.length > MAX_STRING_LENGTH) return `${text.slice(0, MAX_STRING_LENGTH)}...`;
		return text;
	};
	return (
		<Link to={`/movie/${movie.id}`} className="movie">
			<img src={movie.medium_cover_image} alt={movie.title} />
			<h2 className="movie__title">
				{movie.title} <span className="movie__year">{movie.year}</span>
			</h2>
			<strong className="movie__rating">{movie.rating}/10</strong>
			<ul className="movie__genres">
				{movie.genres.map((genre, index) => (
					<li key={index} className="genre">
						{genre}
					</li>
				))}
			</ul>
			<p className="movie__summery">{truncateText(movie.summary)}</p>
		</Link>
	);
}

MovieItem.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default MovieItem;
