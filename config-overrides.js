const path = require('path');
const { exec } = require('child_process');

exec(`nodemon ${__dirname}/backend/server.js`);

module.exports = function override(config, env) {
	
	config.resolve.alias = {
		...config.resolve.alias,
		'~': path.join(__dirname, './src/'),
	};

	return config;
}
