import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './routes/Movies';
import Movie from './routes/Movie';

function App() {
	return (
		<Router>
			<header>Menu Link</header>
			<main>
				<Routes>
					<Route path="/" element={<Movies />} />
					<Route path="/movie/:id" element={<Movie />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
