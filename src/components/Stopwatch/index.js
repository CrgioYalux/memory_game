import './Stopwatch.css';
import { forwardRef, useImperativeHandle } from 'react';
import { useTimer } from '../../hooks/useTime';

const Stopwatch = forwardRef((props, ref) => {
	const { seconds, minutes, stopTimer } = useTimer();

	useImperativeHandle(ref, () => {
		return {
			seconds,
			minutes,
			stopTimer,
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
