import './Game.css';
import { useContext, useState, useEffect } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';
import Timer from '../Timer';

const Game = () => {
	const { options, dispatchScore } = useContext(OptionsContext);
	const [time, setTime] = useState(options.difficulty);
	const [timerMode, setTimerMode] = useState(0);

	useEffect(() => {
		const switchTimer = setTimeout(() => {
			setTimerMode(1);
		}, 1000 * options.difficulty);
		return () => {
			clearTimeout(switchTimer);
		};
	}, [time, options.difficulty]);

	useEffect(() => {
		if (options.difficulty === null) window.location.href = '/';
	}, [options.difficulty]);

	return (
		<>
			<div className="game">
				{options.difficulty ? (
					<>
						<div className="game-container">
							<Board options={options} dispatchScore={dispatchScore} />
						</div>
						<div className="timer-container">
							{!timerMode ? <Timer from={time} to={0} /> : null}
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export default Game;
