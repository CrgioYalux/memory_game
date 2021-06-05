import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { useState, useReducer, useMemo } from 'react';
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import Background from './components/Background';
import { OptionsContext } from './hooks/OptionsContext';
import { scoreReducer } from './helpers/ScoreUtilities';
import GoBackBT from './components/GoBackBT';

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
			losses: [],
		},
	});

	const providerValue = useMemo(
		() => ({ options, setOptions, dispatchScore, score }),
		[options, setOptions, score],
	);

	return (
		<>
			<Router>
				<Background display={options.background} />
				<GoBackBT />
				<Redirect to="/memory_game" />
				<OptionsContext.Provider value={providerValue}>
					<Switch>
						<Route exact path="/memory_game" component={StartMenu} />
						<Route path="/game" component={Game} />
					</Switch>
				</OptionsContext.Provider>
			</Router>
		</>
	);
};

// gobackbt is working but background options (options in general) doesn't persist

export default App;