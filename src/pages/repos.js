import React from 'react'

export default React.createClass({
	displayName: 'ReposPage',
	render () {
		return (
			<div className='container'>
				<header role='banner'>
					<h1>Repos</h1>
				</header>
				<div>
					<p>repos are coming....</p>
					<a href='/' className='button button-large'>
						<span className='mega-octicon octicon-mark-github'></span>
						Go Back
					</a>
				</div>
			</div>
		)
	}
})
