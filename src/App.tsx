import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { HomeMain } from "./components/Home-Main/Home-Main";
import { StrategyProviders } from "./components/Nav-Links/Strategy-Providers/Strategy-Providers";
import { Footer } from "./components/Footer";

import './App.css';

class App extends React.Component {
	render() {
		return <Router>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path="/">
							<HomeMain />
						</Route>
						<Route exact path="/strategy-charts">
							<StrategyProviders />
						</Route>
					</Switch>
					<Footer />
				</div>
		</Router>
	}
}

export default App;