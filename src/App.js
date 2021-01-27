import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-items App-header">
				<h3>BetLight</h3>
			</header>
			<div className="App-items App-content" />
			<footer className="App-items App-footer">
				<p className="powered-by">
					<img src={logo} className="App-logo" alt="logo" />
				</p>
			</footer>
		</div>
	);
}

export default App;
