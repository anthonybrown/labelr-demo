import React from  'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
	mixins: [ampersandMixin],

	displayName: 'Label',

	getInitialState () {
		const {name, color} = this.props.label
		return  {
			name: name,
			color: color
		}
	},

	onEditClick (e) {
		this.props.label.editing = true
	},

	onCancelClick (e) {
		this.props.label.editing = false
		this.setState(this.getInitialState())
	},

	onNameChange (e) {
		this.setState({
			name: e.target.value
		})
	},

	onColorChange (e) {
		this.setState({
			color: e.target.value.slice(1)
		})
	},

	onSubmitForm (e) {
		e.preventDefault()


	},

	onDeleteClick (e) {
		// delete the model
	},

	render () {
		const {label} = this.props
		const {name, color} = this.state
		const cssColor = '#' + color
		let content

		if (label.editing) {
			content = (
				<form onSubmit={this.onSubmitForm} className='label'>
					<span style={{ backgroundColor: cssColor }}
								className='label-color avatar avatar-small avatar-rounded'>
						&nbsp;
					</span>
					<input onChange={this.onNameChange}  value={name}  name='name'/>
					<input onChange={this.onColorChange} value={'#' + color} name='color'/>
					<button type='submit' className='button button-small'>Save</button>
					<button onClick={this.onCancelClick}
									type='button'
									className='button button-small button-unstyled'>
						cancel
					</button>
				</form>
			)
		} else {
			content = (
				<div className='label'>
					<span style={{ backgroundColor: cssColor }}
								className='label-color'>
						&nbsp;
					</span>
					<span>{ label.name }</span>
					<span onClick={this.onEditClick}	 className='octicon octicon-pencil'></span>
					<span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
				</div>
			)
		}

		return (
			<div>{ content }</div>
		)
	}
})
