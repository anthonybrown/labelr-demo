import app from 'ampersand-app'
import styles from './styles/main.styl'
import Router from './router'

window.app = app

app.extend({
	init () {
		this.router = new Router()
		this.router.history.start()
	}
})

// global event channel for sending applicaiton level
// events, don't overuse this featuer

//app.on('hello', (data) => {
//	console.log(data);
//})

app.init()

