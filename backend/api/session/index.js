
exports.get = (app) => {

	const { newSession } = app;

	return (req, res) => {

		setTimeout(() => {
			res.json(newSession());
		}, 1500);

	};
};

exports.post = (app) => {

	const { hasAuth } = app;

	return (req, res) => {

		setTimeout(() => {
			res.json({ status: hasAuth(req) ? 'success' : 'failure' });
		}, 1500);

	};
};
