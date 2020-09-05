import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/favourite" component={FavouritePage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
