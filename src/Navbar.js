import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="links">
				<Link to="/football">Football</Link>
				<Link to="/">Racing</Link>
				<Link to="/">In-Play</Link>
				<Link to="/">Virtuals</Link>
				<Link to="/">Roulette</Link>
			</div>
		</nav>
	);
};

export default Navbar;
