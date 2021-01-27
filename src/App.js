import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
	const [ primaryMarkets, setPrimaryMarkets ] = useState(false);

	const togglePrimaryMarkets = () => {
		console.log('togglePrimaryMarkets called.');
		setPrimaryMarkets(!primaryMarkets);
	};

	return (
		<div className="App">
			<header className="App-items App-header">
				<h3>BetLight</h3>
			</header>

			<div className="App-items App-content">
				<input
					type="checkbox"
					id="primaryMarkets"
					onChange={togglePrimaryMarkets}
				/>
				<label for="primaryMarkets">AAA</label>
				<Home primaryMarkets={primaryMarkets} />
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
