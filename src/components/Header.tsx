import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return <header>
		<NavLink to="/"><img src="./images/logo.png" alt=""/></NavLink>
		<div className="header_nav_options">
			<nav>
				<ul className="login">
					<li><NavLink to="/strategy-charts">Strategy Providers</NavLink></li>
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
}