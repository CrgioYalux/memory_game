import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import Background from './components/Background';
import GoBackBT from './components/GoBackBT';
import { OptionsContext } from './hooks/OptionsContext';
import { useState, useReducer, useEffect } from 'react';
import { scoreReducer } from './helpers/ScoreUtilities';
import './App.css';

const App = () => {
	const [options, setOptions] = useState({
		background: true,
		difficulty: null,
		language: 'english',
	});

	const [{ score }, dispatchScore] = useReducer(scoreReducer, {
		score: {
			wins: [],
			loses: [],
		},
	});

	useEffect(() => {
		console.log(score);
	}, [score]);

	return (
		<>
			<Router>
				<OptionsContext.Provider
					value={{ options, setOptions, dispatchScore, Link }}
				>
					<Background display={options.background} />
					<GoBackBT />
					<Switch>
						<Route exact path="/">
							<StartMenu />
						</Route>
						<Route path="/game">
							<Game />
						</Route>
					</Switch>
				</OptionsContext.Provider>
			</Router>
		</>
	);
};

// Use a context for the lang and background style

export default App;
