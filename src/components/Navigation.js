import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="navigation">
			<NavLink to="/">Movies</NavLink>
		</nav>
	);
}

export default Navigation;
