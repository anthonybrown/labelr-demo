export default {
	'localhost': {
		clientId: '8a49f43581e490e6e0a3',
		gatekeeperUrl: 'https://labelr-localhost-demo.herokuapp.com/authenticate'
	},

	'tbrown_labelr.surge.sh': {
		clientId: '90278643414e69092867',
		gatekeeperUrl: 'https://labelr-production-demo.herokuapp.com/authenticate'
	}
}[window.location.hostname]
