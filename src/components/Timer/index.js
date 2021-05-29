import './Timer.css';
import { useState, useEffect } from 'react';

const Timer = ({ from, to }) => {
	const [seconds, setSeconds] = useState(from);

	useEffect(() => {
		if (from > to) {
			const counter =
				seconds !== to - 1
					? setTimeout(() => {
							seconds > to && setSeconds((c) => c - 1);
					  }, 1000)
					: null;
			return () => {
				counter && clearTimeout(counter);
			};
		}
	}, [seconds, to, from]);

	return (
		<div className="Timer">
			<p> hiding in </p>
			<div className="Timer-seconds">
				{seconds < 10 ? `0${seconds}` : seconds}
			</div>
		</div>
	);
};

export default Timer;
