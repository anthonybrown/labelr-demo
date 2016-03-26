import Model from 'ampersand-model'

export default Model.extend({
	url: 'https://api.github.com/user',

	initialize () {
		this.token = window.localStorage.token
		this.on('change:token', this.onChangeToken)
		this.fetchInitialData()
	},

	props: {
		id         : 'number',
		login      : 'string',
		avatar_url : 'string'
	},

	session: {
		token: 'string'
	},

	onChangeToken () {
		window.localStorage.token = this.token
		this.fetchInitialData()
	},

	fetchInitialData () {
		if (this.token) {
			this.fetch()
		}
	},

	ajaxConfig () {
		return {
			headers: {
				Authorization: 'token ' + this.token
			}
		}
	}
})
