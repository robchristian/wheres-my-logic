import React, { Fragment } from 'react';

const HomePage = () => (
	<Fragment>
		<p>Home Page</p>
		<p>
			<button onClick={() => alert('async stuff')}>Async Stuff</button>
		</p>
	</Fragment>
);

export default HomePage;
