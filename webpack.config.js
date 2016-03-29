var getConfig = require('hjs-webpack')

module.exports = getConfig({
	in: 'src/app.js',
	out: 'public',
	isDev: process.env.NODE_ENV !== 'production',
	html: function (context) {
		return {
			'200.html'	: context.defaultTemplate(),
			'index.html': context.defaultTemplate()
		}
	}
})
