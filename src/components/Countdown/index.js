import './Countdown.css';
import { useCountdown } from '../../hooks/useTime';

const Countdown = ({ from, to = { seconds: 0, minutes: 0 } }) => {
	const { seconds } = useCountdown(from, to);

	return (
		<div className="Countdown">
			<p> hiding in </p>
			<div className="Countdown-seconds">
				{seconds < 10 ? `0${seconds}` : seconds}
			</div>
		</div>
	);
};

export default Countdown;
