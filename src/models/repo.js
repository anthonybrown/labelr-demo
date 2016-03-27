import Model from 'ampersand-model'

export default Model.extend({
	props: {
		id        : 'number',
		name      : 'string',
		full_name : 'string'
	},

	derived: {
		app_url: {
			deps: ['full_name'],
			fn () {
				return 'repo/' + this.full_name
			}
		}
	}
})

