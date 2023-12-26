module.exports.handler = (event, context, done) => {
	done(null, {
		statusCode: 200,
		headers: {},
		body: JSON.stringify({
			data: [
				{
					id: 1,
					name: "clean up",
					status: "open",
				},
				{
					id: 2,
					name: "cook",
					status: "done",
				},
			],
		}),
	});
};
