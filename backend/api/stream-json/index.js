const second = 1000;

exports.post = (app) => {

	const { hasAuth, newJson, streamNext } = app;

	return (req, res) => {

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
	};
};
