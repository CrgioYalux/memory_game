import './Stopwatch.css';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

let incrementSeconds;

const Stopwatch = forwardRef((props, ref) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);

	useEffect(() => {
		const incrementSeconds = setTimeout(() => {
			setSeconds((c) => c + 1);
		}, 1000);
		return () => {
			clearTimeout(incrementSeconds);
		};
	}, [seconds]);

	useEffect(() => {
		if (seconds === 59) {
			setSeconds(0);
			setMinutes((c) => c + 1);
		}
	}, [seconds]);

	const stopCounting = () => clearTimeout(incrementSeconds);

	useImperativeHandle(ref, () => {
		return {
			stopCounting,
			seconds,
			minutes,
		};
	});

	return (
		<div className="Stopwatch">
			<div className="Stopwatch-minutes">
				{minutes < 10 ? `0${minutes}` : minutes}
			</div>
			:
			<div className="Stopwatch-seconds">
				{seconds < 10 ? `0${seconds}` : seconds}
			</div>
		</div>
	);
});

export default Stopwatch;
