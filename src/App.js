import Background from './components/Background';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App = () => {
	return (
		<>
			<Background />
			<BrowserRouter>
				<Redirect from="/" to="/home" />
				<Switch>
					<Route path="/home" render={Home} />
					{/* <Route path="/projects" exact render={} /> */}
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
