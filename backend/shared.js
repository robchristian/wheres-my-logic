const sha256 = require('sha256');
const faker = require('faker');

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
};

module.exports = {
	getNewUserId,
	newSession,
	getUserSecret,
	getNewUserId,
	padLeft,
	newJson,
	streamNext,
	hasAuth,
};
