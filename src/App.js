import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './routes/Movies';
import Movie from './routes/Movie';
import Navigation from './components/Navigation';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<header>
				<Navigation />
			</header>
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
