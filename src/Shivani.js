import React from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/getShivaniState';
import { getUserData } from './actions/getUserData';

class Shivani extends React.Component {
	state = {
		auth: true,
	};

	handleClick = () => {
		//	this.props.getData('shivani sachdeva');
	};

	componentDidMount() {
		this.props.dispatch(getUserData('https://jsonplaceholder.typicode.cotm/users/1'));
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Dispatch</button>
				<h1>{this.props.username}</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('state', state);
	return {
		username: state.getShivaniInfo.data,
	};
};

// const mapDispatchToProps = dispatch => ({
// 	getData: data => dispatch(getData(data)),
// });

export default connect(mapStateToProps)(Shivani);

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Shivani);

// Action -> Action Dispatch -> Functions
// Reducer -> Pure Functions
// Store {}

// redux
// redux thunk / saga -> middleware

// npm i redux react-redux
