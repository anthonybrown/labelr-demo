import Model from 'ampersand-model'
import xhr from 'xhr'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
	idAttribute: 'name',

	props: {
		name: 'string',
		color: 'string'
	},

	session: {
		editing: {
			type: 'boolean',
			default: false
		}
	},

	update (newAttributes) {
		const old = this.attributes
		xhr({
			url: this.url(),
			json: newAttributes,
			headers: {
				Authorization: 'token ' + app.me.token
			},
			method: 'PATCH'
		}, (err, resp, body) => {
			if (err) {
				this.set(old)
				console.log('check yo wifi lol..');
			}
		})
		this.set(newAttributes)
	}
})
