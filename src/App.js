import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { createStore } from 'redux';

const sports = [
	{
		sport: 'Volleyball',
		key: 0,
	},
	{
		sport: 'Tennis',
		key: 1,
	},
	{
		sport: 'Badminton',
		key: 2,
	},
	{
		sport: 'Table Tennis',
		key: 3,
	},
];

class App extends React.Component {
	render() {
		return (
			<Container>
				<MatchFinder />
				<Row>
					<Col md="6">
						<Ranker />
					</Col>
					<Col md="6">
						<SportSelector />
					</Col>
				</Row>
			</Container>
		);
	}
}

class MatchFinder extends React.Component {
	render() {
		return <div className="widget score-widget"></div>;
	}
}

class Ranker extends React.Component {
	render() {
		return <div></div>;
	}
}

class SportSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: sports,
			activated: false,
			selected: null,
		};
		this.activate = this.activate.bind(this);
	}

	activate(e) {
		this.setState({
			activated: true,
			selected: e,
		});
		console.log(this.state.selected);
	}

	render() {
		return this.state.activated ? (
			<Scoreboard sportName={this.state.selected} />
		) : (
			<div className="widget score-widget">
				{this.state.options.map((item) => (
					<Col md="12">
						<button
							type="button"
							className="btn btn-success"
							key={item.key}
							onClick={(e) => this.activate(e.target.value)}
							value={item.sport}
						>
							{item.sport}
						</button>
					</Col>
				))}
			</div>
		);
	}
}

class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			score1: 0,
			score2: 0,
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment(team) {
		this.setState((state) => {
			return team === 1 ? { score1: state.score1++ } : { score2: state.score2++ };
		});
	}

	decrement(team) {
		this.setState((state) => {
			return team === 1 ? { score1: state.score1-- } : { score2: state.score2-- };
		});
	}

	render() {
		return (
			<div id="scorecard" className="widget score-widget">
				<h1>Score</h1>
				<p id="sport-name">{this.props.sportName}</p>
				<Row>
					<Col md="4">
						<p id="team1-score" className="score">
							{this.state.score1}
						</p>
						<p id="team1-name" className="teamName">
							Team 1
						</p>
						<button type="button" className="btn btn-success" onClick={() => this.increment(1)}>
							+
						</button>
						<button type="button" className="btn btn-danger" onClick={() => this.decrement(1)}>
							-
						</button>
					</Col>
					<Col md="4">
						<p>-</p>
					</Col>
					<Col md="4">
						<p id="team2-score" className="score">
							{this.state.score2}
						</p>
						<p id="team2-name" className="teamName">
							Team 2
						</p>
						<button type="button" className="btn btn-success" onClick={this.increment}>
							+
						</button>
						<button type="button" className="btn btn-danger" onClick={this.decrement}>
							-
						</button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
