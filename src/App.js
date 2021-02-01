import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Football from './Football';

function App() {	
	return (
		<div className="App">
			<header className="App-items App-header">
				<h3>BetLight</h3>
			</header>

			<Router>
				<Navbar />
				<div className="App-items App-content">
					<Switch>
						<Route exact path="/football">
							<Football />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>			
		</div>
	);
}

export default App;
