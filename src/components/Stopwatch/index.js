import './Stopwatch.css';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

let counter;

const Stopwatch = forwardRef(({}, ref) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);

	const stopCounting = () => {
		clearTimeout(counter);
	};

	useImperativeHandle(ref, () => {
		return {
			stopCounting,
			seconds,
			minutes,
		};
	});

	useEffect(() => {
		counter = setTimeout(() => {
			setSeconds((c) => c + 1);
			if (seconds === 59) {
				setSeconds(0);
				setMinutes((c) => c + 1);
			}
		}, 1000);
	}, [seconds]);

	return (
		<div className="Stopwatch">
			<div className="Stopwatch-seconds">
				{seconds < 10 ? `0${seconds}` : seconds}
			</div>
			<div className="Stopwatch-minutes">
				{minutes < 10 ? `0${minutes}` : minutes}
			</div>
		</div>
	);
});

export default Stopwatch;
