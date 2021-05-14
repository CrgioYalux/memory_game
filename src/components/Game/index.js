import './Game.css';
import { useContext, useState } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';

const Game = () => {
	const { options, setOptions } = useContext(OptionsContext);
	return (
		<>
			<div className="game">
				<Board options={options} />
			</div>
		</>
	);
};

export default Game;
