import './Game.css';
import { useContext, useState, useEffect, useRef } from 'react';
import { BASE_PATH } from '../../helpers/paths';
import { OptionsContext } from '../../hooks/OptionsContext';
import Board from '../Board';
import Countdown from '../Countdown';
import Timer from '../Timer';
import ResultsInGame from '../ResultsInGame';

const Game = () => {
	const { options, dispatchScore } = useContext(OptionsContext);

	useEffect(() => {
		!options.difficulty && (() => (window.location.pathname = BASE_PATH))();
	}, [options.difficulty]);

	const [timerMode, setTimerMode] = useState(0);
	const TimerRef = useRef();
	const timerModeTimeOutRef = useRef();

	const handleWL = (result) => {
		TimerRef.current &&
			(() => {
				TimerRef.current.stopTimer();
				dispatchScore({
					type: result,
					difficulty: options.difficulty,
					time: {
						seconds: TimerRef.current.seconds,
						minutes: TimerRef.current.minutes,
					},
				});
			})();
		setTimerMode(0);
	};

	useEffect(() => {
		timerModeTimeOutRef.current && clearTimeout(timerModeTimeOutRef.current);
		timerModeTimeOutRef.current = setTimeout(() => {
			setTimerMode(1);
		}, 1000 * options.difficulty);
		return () => {
			timerModeTimeOutRef.current && clearTimeout(timerModeTimeOutRef.current);
		};
	}, [options.difficulty, timerMode]);

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
									<Timer ref={TimerRef} />
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
