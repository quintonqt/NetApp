import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { createStore } from 'redux';

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
				<Row>
					<Col md="4">
						<p id="team1-score" className="score">
							25
						</p>
						<p id="team1-name" className="teamName">
							Team 1
						</p>
						<button type="button" class="btn btn-success">
							+
						</button>
						<button type="button" class="btn btn-danger">
							-
						</button>
					</Col>
					<Col md="4">
						<p>-</p>
					</Col>
					<Col md="4">
						<p id="team2-score" className="score">
							24
						</p>
						<p id="team2-name" className="teamName">
							Team 2
						</p>
						<button type="button" class="btn btn-success">
							+
						</button>
						<button type="button" class="btn btn-danger">
							-
						</button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
