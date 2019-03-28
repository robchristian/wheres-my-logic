import React from 'react';

export default ({ JSON, startStreaming }) => (
	<div>
		<p>Streams some JSON</p>
		<button onClick={startStreaming}>Start Streaming</button>
		<pre>{ JSON }</pre>
	</div>
);
