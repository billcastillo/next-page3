import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import base from '../components/rebase'
import { database } from 'firebase'

const Games = ( props ) => {
	console.log('props', props);
	return (
		<div>
			<Head title="Games" />
			<Nav />
			<div>
				<h1>{props.name}</h1>
			</div>
		</div>
	);
}

Games.getInitialProps = async function({ query }) {
	console.log('query:', query);
	const data = await base.get(`games/${query.id}`, {})
		.then(data => {
			console.log('dataeh :', data);
			return data;
		})
		.catch(err => {
			console.error('err fetching game data:', err);
			return {};
		});
	
	return data;
}

// class Games extends React.Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			game: {}
// 		}
// 	}

// 	render() {
// 		console.log('game props:', this.props);

// 		return (
// 			<div>
// 				<Head title="Games" />
// 				<Nav />
// 				<div>
// 					<h1>{this.props.name}</h1>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default Games