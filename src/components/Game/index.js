import './Game.css';
import { useContext, useEffect, useReducer } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';

const Game = () => {
	const { options, dispatchScore } = useContext(OptionsContext);

	useEffect(() => {
		if (options.difficulty === null) window.location.href = '/';
	}, [options.difficulty]);

	return (
		<>
			<div className="game">
				{options.difficulty ? (
					<Board options={options} dispatchScore={dispatchScore} />
				) : null}
			</div>
		</>
	);
};

export default Game;
