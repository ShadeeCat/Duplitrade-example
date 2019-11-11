import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import './App.css';

const App: React.FC = () => {
return (
      <Router>
        <div className="App">
        <header>
              <NavLink to="/"><img src="./images/logo.png" alt=""/></NavLink>
          <div className="header_nav_options">
            <nav>
              <ul className="login">
                <li><NavLink to="/strategy-providers">Strategy Providers</NavLink></li>
                <li><NavLink to="/getting-started">Getting Started</NavLink></li>
                <li><NavLink to="/simulator">Simulator</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
              </ul>
            </nav>
            <div className="enter_form">
              <button className="login">Login</button>
              <span>|</span>
              <button className="sign_up">Sign Up</button>
            </div>
          </div>
        </header>
        <Switch>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
          /*<Route exact path='/' component={props => <HomeComponent {...props} data={ this.state.cartItems } />} />*/
          /*<Route path='/products/:product_id' component={props => <ProdComp {...props} data={ this.state.cartItems }  />} />*/