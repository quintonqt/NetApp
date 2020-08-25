import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<MatchFinder />

				<Row>
					<Col md="6">
						<Ranker />
					</Col>
					<Col md="6">
						<Scoreboard />
					</Col>
				</Row>
			</Container>
		);
	}
}

class MatchFinder extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div></div>;
	}
}

class Ranker extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div></div>;
	}
}

class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="scorecard">
				<h1>Score</h1>
				<p id="sport-name">Volleyball</p>
				<div id="current-score">
					<p id="team1-score" class="score">
						25
					</p>
					<p>-</p>
					<p id="team2-score" class="score">
						24
					</p>
				</div>
			</div>
		);
	}
}

export default App;
