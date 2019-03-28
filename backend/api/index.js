
exports.get = () => {

	return (req, res) => {

		setTimeout(() => {
			res.send('Hello World!');
		}, 1000);

	};
};
