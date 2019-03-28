const express = require('express');
const sha256 = require('sha256');
const faker = require('faker');
const app = express();
const port = 4000;
const second = 1000;

const sessions = {}; // plain-text secrets stored in memory
const streams = {}; // user-specific data to stream

const hasAuth = (req) => {
	const { id, secret } = req.body;
	return sessions[id] && secret && sessions[id] === secret;
};

const streamNext = (id) => {
	streams[id] = streams[id] || 0;
	return streams[id]++;
}

const newJson = (num) => JSON.stringify(
	faker.helpers.createCard(),
);

const padLeft = (str) => `0000000000${str}`.slice(-10);

const getNewUserId = () => padLeft(Math.random().toString().slice(2,12));

const getUserSecret = (id) => sha256(`super-secret-salt-${id}`);

const newSession = () => {
	const id = getNewUserId();

	if (sessions[id]) {
		return newSession();
	}
	else {
		const secret = getUserSecret(id);
		sessions[id] = secret;

		setTimeout(() => delete sessions[id], 90000); // 90000 = 15 minutes

		return { id, secret };
	}
}


app.use(express.json());

app.get('/api', (req, res) => {

	setTimeout(() => {
		res.send('Hello World!');
	}, 1000);

});

app.get('/api/session', (req, res) => {

	setTimeout(() => {
		res.json(newSession());
	}, 1500);

});

app.post('/api/session', (req, res) => {

	setTimeout(() => {
		res.json({ status: hasAuth(req) ? 'success' : 'failure' });
	}, 1500);

});

app.post('/api/stream-json', (req, res) => {

	if (hasAuth(req)) {

		const id = req.body.id;

		let ref = setInterval(() => {
			const str = newJson(streamNext(id));
			console.log(str);
			res.write(str);
		}, 10);
		const done = () => clearInterval(ref);

		req.on('close', done);
		req.on('end',   done);

		setTimeout(() => {
			done();
			res.end(']');
		}, 5 * second);
	}
	else {
		res.json({ status: 'denied' });
	}
});

app.listen(port, () => console.log(`listening on ${port}`));
