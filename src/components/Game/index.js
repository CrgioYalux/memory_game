import './Game.css';
import { useContext, useState, useEffect, useRef } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';
import Timer from '../Timer';
import Stopwatch from '../Stopwatch';
import ResultsInGame from '../ResultsInGame';

const Game = () => {
	const { options, dispatchScore } = useContext(OptionsContext);
	const [timerMode, setTimerMode] = useState(0);
	const [usedTime, setUsedTime] = useState(null);
	const StopwatchRef = useRef();
	const [result, setResult] = useState(null);

	useEffect(() => {
		if (options.difficulty === null) window.location.href = '/';
	}, [options.difficulty]);

	const handleWL = (result) => {
		saveUsedTime();
		setResult(result);
		switchTimer.current();
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

	const switchTimer = useRef(() => {
		setTimerMode(0);
		const counter = setTimeout(() => {
			setTimerMode(1);
		}, 1000 * options.difficulty);
		return () => {
			clearTimeout(counter);
		};
	});

	useEffect(() => {
		switchTimer.current();
	}, []);

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
							<Board options={options} handleWL={handleWL} />
						</div>
						<div className="game-info">
							<div className="timer-container">
								<ResultsInGame />
								{timerMode === 0 ? (
									<Timer from={options.difficulty} to={0} />
								) : null}
								{timerMode === 1 ? <Stopwatch ref={StopwatchRef} /> : null}
							</div>
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export default Game;
