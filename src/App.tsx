import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import { Header } from "./components/Header";
import { HomeMain } from "./components/HomeMain";
import { StrategyProviders } from "./components/StrategyCharts";
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
					/*<Route exact path='/' component={props => <HomeComponent {...props} data={ this.state.cartItems } />} />*/
					/*<Route path='/products/:product_id' component={props => <ProdComp {...props} data={ this.state.cartItems }  />} />*/
					// <HowToJoin />