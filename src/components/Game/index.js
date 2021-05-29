import './Game.css';
import { useContext, useState, useEffect, useRef } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';
import Timer from '../Timer';
import Stopwatch from '../Stopwatch';

const Game = () => {
	const { options, dispatchScore } = useContext(OptionsContext);
	const [timerMode, setTimerMode] = useState(0);
	const [time, setTime] = useState(options.difficulty);
	const [usedTime, setUsedTime] = useState({ seconds: 0, minutes: 0 });
	const StopwatchRef = useRef();

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

	const saveUsedTime = () => {
		StopwatchRef.current.stopCounting();
		setUsedTime({
			seconds: StopwatchRef.current.seconds,
			minutes: StopwatchRef.current.minutes,
		});
		setTimerMode(3);
	};

	return (
		<>
			<div className="game">
				{options.difficulty ? (
					<>
						<div className="game-container">
							<Board options={options} dispatchScore={dispatchScore} />
						</div>
						<div className="timer-container">
							{timerMode === 0 ? <Timer from={time} to={0} /> : null}
							{timerMode === 1 ? <Stopwatch ref={StopwatchRef} /> : null}
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export default Game;
