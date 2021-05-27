import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
			loses: [],
		},
	});

	const providerValue = useMemo(
		() => ({ options, setOptions, dispatchScore }),
		[options, setOptions],
	);

	return (
		<>
			<Router>
				<Background display={options.background} />
				<GoBackBT />
				<OptionsContext.Provider value={providerValue}>
					<Switch>
						<Route exact path="/" component={StartMenu} />
						<Route path="/game" component={Game} />
					</Switch>
				</OptionsContext.Provider>
			</Router>
		</>
	);
};

// gobackbt is working but background options (options in general) doesn't persist

export default App;
