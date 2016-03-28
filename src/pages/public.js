import React from 'react'
import NavHelper from '../components/nav-helper'


export default React.createClass({
	displayName: 'PublicPage',
	render () {
		return (
			<NavHelper className='container'>
				<header role='banner'>
					<h1>Lablr <span className='mega-octicon octicon-octoface'></span></h1>
				</header>
				<div>
					<p>We label stuff for you, because we can&trade;</p>
					<a href='/login' className='button button-large'>
						<span className='mega-octicon octicon-mark-github'> </span>&nbsp;
						Login with GitHub
					</a>
				</div>
			</NavHelper>
		)
	}
})
