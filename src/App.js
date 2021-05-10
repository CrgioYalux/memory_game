import Background from './components/Background';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StartMenu from './components/StartMenu';
import './App.css';

const App = () => {
	return (
		<>
			<Background />
			<BrowserRouter>
				<Redirect from="/" to="/start" />
				<Switch>
					<Route path="/start" exact render={StartMenu} />
					{/* <Route path="/projects" exact render={} /> */}
				</Switch>
			</BrowserRouter>
		</>
	);
};

// Use a context for the lang and background style

export default App;
