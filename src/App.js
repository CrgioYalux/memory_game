import Background from './components/Background';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StartMenu from './components/StartMenu';
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
			<OptionsContext.Provider value={{ options, setOptions }}>
				<Background display={options.background} />
				<BrowserRouter>
					<Redirect from="/" to="/start" />
					<Switch>
						<Route path="/start" exact render={() => <StartMenu />} />
					</Switch>
				</BrowserRouter>
			</OptionsContext.Provider>
		</>
	);
};

// Use a context for the lang and background style

export default App;
