import { useState, useEffect } from 'react';
import MovieItem from '../components/MovieItem';

function Movies() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year';
		const {
			data: { movies },
		} = await (await fetch(url)).json();
		setMovies(movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<section className="movies">
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
			)}
		</section>
	);
}

export default Movies;
