import './Game.css';
import { useContext, useEffect } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';

const Game = () => {
	const { options, setOptions } = useContext(OptionsContext);

	useEffect(() => {
		if (options.difficulty === null) window.location.href = '/';
	}, [options]);

	return (
		<>
			<div className="game">
				<Board options={options} />
			</div>
		</>
	);
};

export default Game;
