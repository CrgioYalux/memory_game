import './Timer.css';
import { forwardRef, useImperativeHandle } from 'react';
import { useTimer } from '../../hooks/useTime';

const Timer = forwardRef((props, ref) => {
	const { seconds, minutes, stopTimer } = useTimer();

	useImperativeHandle(ref, () => {
		return {
			seconds,
			minutes,
			stopTimer,
		};
	});

	return (
		<div className="Timer">
			<div className="Timer-minutes">
				{minutes < 10 ? `0${minutes}` : minutes}
			</div>
			:
			<div className="Timer-seconds">
				{seconds < 10 ? `0${seconds}` : seconds}
			</div>
		</div>
	);
});

export default Timer;
