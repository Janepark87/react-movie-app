import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Movie() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const { id } = useParams();
	const getMovie = async () => {
		const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
		const {
			data: { movie },
		} = await (await fetch(url)).json();
		setMovie(movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	});
	return (
		<section className="container">
			{loading ? <strong className="loading">Loading...</strong> : <MovieDetail movie={movie} />}
		</section>
	);
}

export default Movie;
