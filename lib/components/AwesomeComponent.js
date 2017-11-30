import React from 'react';
import { Button } from 'react-bootstrap';

class AwesomeComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { likesCount: 0 };
	}

	onLike() {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({ likesCount: newLikesCount });
	}

	render() {
		return (
			<div>
				Likes : <span>{this.state.likesCount}</span>{' '}
				<Button bsStyle="primary" bsSize="small" onClick={this.onLike.bind(this)}>Like Me</Button>
			</div>
		);
	}

}

export default AwesomeComponent;