import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from '~/components/layouts/main';
import split from '~/helpers/code-split';
import './App.css';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={split(() => import('~/components/pages/home'))} />
			<Route exact path="/example-one" component={split(() => import('~/components/pages/example-one'))} />
			<Route exact path="/example-two" component={split(() => import('~/components/pages/example-two/index'))} />
		</Switch>
	</BrowserRouter>
);
