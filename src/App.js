import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import Background from './components/Background';
import { OptionsContext } from './hooks/OptionsContext';
import { useState } from 'react';
import './App.css';

const App = () => {
	const [options, setOptions] = useState({
		background: true,
		difficulty: null,
		language: 'english',
	});

	return (
		<>
			<Router>
				<OptionsContext.Provider value={{ options, setOptions, Link }}>
					<Background display={options.background} />
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
