import './Game.css';
import { useContext, useState, useEffect, useRef } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';
import Countdown from '../Countdown';
import Timer from '../Timer';
import ResultsInGame from '../ResultsInGame';

const Game = () => {
	const { options, dispatchScore } = useContext(OptionsContext);
	const [timerMode, setTimerMode] = useState(0);
	const [usedTime, setUsedTime] = useState(null);
	const [result, setResult] = useState(null);
	const StopwatchRef = useRef();
	const timingRef = useRef();

	const handleWL = (result) => {
		saveUsedTime();
		setResult(result);
	};

	const saveUsedTime = () => {
		StopwatchRef.current &&
			(() => {
				StopwatchRef.current.stopTimer();
				setUsedTime({
					seconds: StopwatchRef.current.seconds,
					minutes: StopwatchRef.current.minutes,
				});
			})();
	};

	useEffect(() => {
		result &&
			dispatchScore({
				type: result,
				difficulty: options.difficulty,
				time: usedTime,
			});
		return () => {
			setResult(null);
		};
	}, [usedTime, result, dispatchScore, options.difficulty]);

	useEffect(() => {
		setTimerMode(0);
		timingRef.current && clearTimeout(timingRef.current);
		timingRef.current = setTimeout(() => {
			setTimerMode(1);
		}, 1000 * options.difficulty);
	}, [options.difficulty, result]);

	return (
		<>
			<div className="game">
				{options.difficulty && (
					<>
						<div className="game-container">
							<Board options={options} handleWL={handleWL} />
						</div>
						<div className="game-info">
							<div className="timer-container">
								<ResultsInGame />
								{timerMode ? (
									<Timer ref={StopwatchRef} />
								) : (
									<Countdown
										from={{ seconds: options.difficulty, minutes: 0 }}
									/>
								)}
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Game;
