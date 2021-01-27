import logo from './logo.svg';
import './App.css';
import Home from './Home';
import useToggle from './Toggle';

function App() {
	const [ isOn, toggleIsOn ] = useToggle();
	const primaryTitle = (isOn ? 'Hide primary market' : 'Show primary market');
	return (
		<div className="App">
			<header className="App-items App-header">
				<h3>BetLight</h3>
			</header>

			<div className="App-items App-content">
				<span>
					<input
						type="checkbox"
						id="primaryMarkets"
						onClick={toggleIsOn}
					/>
					<label htmlFor="primaryMarkets">
						{primaryTitle}
					</label>
				</span>
				<Home primaryMarkets={isOn} />
			</div>

			<footer className="App-items App-footer">
				<p className="powered-by">
					<img src={logo} className="App-logo" alt="logo" />
				</p>
			</footer>
		</div>
	);
}

export default App;
