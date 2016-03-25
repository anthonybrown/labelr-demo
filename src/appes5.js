
var React = require('react')
var styles = require('./styles/main.styl')

var Hello = React.createClass({
	displayName: 'Hello from ReactJS',
	render: function () {
		return <div>Hello, {this.props.name}</div>
	}
})

React.render(<Hello name='Jesus' />, document.body)
