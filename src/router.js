import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import qs from 'qs'
import uuid from 'node-uuid'
import xhr from 'xhr'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import RepoDetailPage from './pages/repo-detail'
import Layout from './layout'

export default Router.extend({
	renderPage ( page, opts = {layout: true} ) {
		if (opts.layout) {
			page = (
				<Layout me={app.me}>
					{ page }
				</Layout>
			)
		}

		React.render(page, document.body)
	},

	routes: {
		''										 : 'public',
		'repos'								 : 'repos',
		'login'								 : 'login',
		'logout'							 : 'logout',
		'repo/:owner/:name'	   : 'repoDetail',
		'auth/callback?:query' : 'authCallback'
	},

	public	() {
		this.renderPage(<PublicPage />, {layout: false})
		//app.trigger('hello', {some: 'data'})
		//React.render(<PublicPage />, document.body)
	},

	repos () {
		this.renderPage(<ReposPage repos={app.me.repos} />)
	},

	repoDetail (owner, name) {
		console.log(owner, name)
		const repo = app.me.repos.getByFullName(owner + '/' + name)
		this.renderPage(<RepoDetailPage repo={repo} />)
	},

	login () {
		const state = uuid()
		window.localStorage.state = state
		window.location = 'https://github.com/login/oauth/authorize?' +
			qs.stringify({
				client_id: '8a49f43581e490e6e0a3',
				redirct_uri: window.location.origin + 'auth/callback',
				scope: 'user, repo',
				state: state
			})
	},

	logout () {
		window.localStorage.clear()
		window.location = '/'
	},

	authCallback (query) {
		query = qs.parse(query)
		if (query.state === window.localStorage.state) {
			delete window.localStorage.state
			xhr({
				url: 'https://labelr-localhost-demo.herokuapp.com/authenticate/' + query.code,
				json: true
			}, (err, resp, body) => {
				if (err) {
					console.error('something is wrong with something...')
				} else {
					app.me.token = body.token
					this.redirectTo('/repos')
				}
			})
		}
	}
})

