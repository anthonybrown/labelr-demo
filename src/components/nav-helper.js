import app from 'ampersand-app'
import React from 'react'
import localLinks from 'local-links'

export	default React.createClass({
	displayName: 'NavHelper',

	onClick (e) {
		const pathname = localLinks.getLocalPathname(e)

		if (pathname) {
			e.preventDefault()
			app.router.history.navigate(pathname)
		}
	},

	render () {
		return (
			<div {...this.props} onClick={this.onClick}>
				{this.props.children}
			</div>
		)
	}
})

