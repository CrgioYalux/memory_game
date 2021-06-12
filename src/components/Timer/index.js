import './Timer.css';
import { useCountdown } from '../../hooks/useTime';

const Timer = ({ from, to = { seconds: 0, minutes: 0 } }) => {
	const { seconds } = useCountdown(from, to);

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
