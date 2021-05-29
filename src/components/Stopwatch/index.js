import './Stopwatch.css';
import {
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
	useRef,
} from 'react';

const Stopwatch = forwardRef(({}, ref) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const counter = useRef(() =>
		setTimeout(() => {
			setSeconds((c) => c + 1);
			if (seconds === 59) {
				setSeconds(0);
				setMinutes((c) => c + 1);
			}
		}, 1000),
	);

	useEffect(() => {
		counter.current();
	}, [seconds]);

	const stopCounting = () => clearTimeout(counter.current());

	useImperativeHandle(ref, () => {
		return {
			stopCounting,
			seconds,
			minutes,
		};
	});

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
