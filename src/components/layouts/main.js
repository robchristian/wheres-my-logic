import React from 'react';
import { Route, Link } from 'react-router-dom';
import './styles.css';

const Layout = ({ component: Component, ...props }) => (
	<Route {...props} render={() => (
		<div className="App">
			<header className="App-header">
				<ul id="navbar">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/example-one">Async 1</Link></li>
					<li><Link to="/example-two">Async 2</Link></li>
				</ul>
			</header>
			<div className="body">
				<Component />
			</div>
		</div>
	)} />
);

export default Layout;
