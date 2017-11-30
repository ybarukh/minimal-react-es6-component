import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from '../../lib/components/AwesomeComponent.js';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './style.css'

class App extends React.Component {
	render() {
		return (
			<div>
				<p> Hello React!</p>
				<AwesomeComponent />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));