import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { resetTweetsState } from 'redux/actions/tweets';
import { resetUsersState } from 'redux/actions/users';

class Nav extends Component {
	constructor() {
		super();

		this.handleResetApp = this.handleResetApp.bind( this );
	}

	handleResetApp() {
		this.props.resetTweetsState();
		this.props.resetUsersState();
	}

	render() {
		return (
			<div className='nav'>
				<Link to='/' onClick={this.handleResetApp}>
					<i className='fa fa-twitter' aria-hidden='true'></i>
					<h1>Twitter Search App</h1>
				</Link>
			</div>
		)
	}
}

export default connect(null, {
	resetTweetsState,
	resetUsersState
})(Nav);
