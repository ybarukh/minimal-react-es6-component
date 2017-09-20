import React from 'react';

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
				Likes : <span>{this.state.likesCount}</span>
				<div><button onClick={this.onLike.bind(this)}>Like Me</button></div>
			</div>
		);
	}

}

export default AwesomeComponent;