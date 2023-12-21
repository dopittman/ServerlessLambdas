module.exports.handler = async (event, context, done) => {
	// error, return w/o error
	done(null, event);
};
