import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
	return (
		<div className="App">
			<header className="App-items App-header">
				<h3>BetLight</h3>
			</header>			
			<div className="App-items App-content">
				<Home />
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
