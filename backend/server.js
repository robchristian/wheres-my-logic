const express = require('express');
const shared = require('./shared');
const port = 4000;

const app = express();

for (prop of Object.keys(shared)) {
	app[prop] = shared[prop];
}
const get = (path) => {
	app.get(path, require(`.${path}`).get(app));
};
const post = (path) => {
	app.post(path, require(`.${path}`).post(app));
};

app.use(express.json());
get('/api');
get('/api/session');
post('/api/session');
post('/api/stream-json');

app.listen(port, () => {
	console.log(`listening on ${port}`)
});
