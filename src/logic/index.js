import { createLogic } from 'redux-logic';
import { START_JSON_STREAM } from '~/actions/constants';

const jsonStreaming = createLogic({

	type: START_JSON_STREAM,

	process: async ({ getState, action, httpClient }, dispatch, done) => {
		
		const { data: creds } = await httpClient.get('/api/session');

		httpClient({
			url: '/api/stream-json',
			method: 'post',
			data: creds,
			transformResponse: (data) => {
				console.log(data);
				return data;
			},
		})
		.then(done)
		.catch((err) => {
			console.log(err);
			done();
		});
	}
});

export default [
	jsonStreaming,
];
