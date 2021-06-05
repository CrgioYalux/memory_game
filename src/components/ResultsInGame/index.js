import './ResultsInGame.css';
import { useContext } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';

const ResultsInGame = () => {
	const { score } = useContext(OptionsContext);
	return (
		<div className="ResultsInGame">
			<div className="ResultsWins">
				<h1>W</h1>
				<h2>{score.wins.length}</h2>
			</div>
			<div className="ResultsLosses">
				<h1>L</h1>
				<h2>{score.losses.length}</h2>
			</div>
		</div>
	);
};

export default ResultsInGame;
