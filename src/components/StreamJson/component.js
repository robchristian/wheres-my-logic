import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import './App.css';

const App = ({ stopStreaming, jsonBlob }) => (
	<Fragment>
    <button onClick={() => stopStreaming()}>Stop</button>
    <div>{ jsonBlob }</div>
  </Fragment>
);

App.PropTypes = {
	startStreaming: PropsTypes.func.isRequired,
	stopStreaming: PropsTypes.func.isRequired,
	jsonBlob: PropTypes.object.isRequired,
};

export default App;
