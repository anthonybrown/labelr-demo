import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
	mixins: [ampersandMixin],

	displayName: 'ReposPage',

	render () {
		const {repos} = this.props

		return (
			<div className='container'>
				<header role='banner'>
					<h1>Repos Page</h1>
				</header>
				<div>
					{repos.map((repo) => {
						return (
							<div key={repo.id}>
								<a href=''>{repo.full_name}</a>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
})
