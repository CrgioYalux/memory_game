import { useState, useEffect, useRef } from 'react';

export const useCountdown = (from, to = { seconds: 0, minutes: 0 }) => {
	const [seconds, setSeconds] = useState(from.seconds);
	const [minutes, setMinutes] = useState(from.minutes);

	const counterRef = useRef();

	const stopCounting = () => {
		counterRef.current && clearInterval(counterRef.current);
		// console.log('Countdown: stopped');
	};

	useEffect(() => {
		// console.log('Countdown: started');
		counterRef.current && clearInterval(counterRef.current);
		counterRef.current = setInterval(() => {
			setSeconds((s) => s - 1);
		}, 1000);
		return () => {
			stopCounting();
		};
	}, []);

	useEffect(() => {
		seconds === to.seconds && minutes === to.minutes
			? stopCounting()
			: !seconds &&
			  minutes &&
			  (() => {
					setMinutes((m) => m - 1);
					setSeconds(59);
			  })();
	}, [to, seconds, minutes]);

	return { seconds, minutes, stopCountdown: stopCounting };
};

export const useTimer = (
	from = { seconds: 0, minutes: 0 },
	to = { seconds: Number.POSITIVE_INFINITY, minutes: Number.POSITIVE_INFINITY },
) => {
	const [seconds, setSeconds] = useState(from.seconds);
	const [minutes, setMinutes] = useState(from.minutes);

	const counterRef = useRef();

	const stopCounting = () => {
		counterRef.current && clearInterval(counterRef.current);
		// console.log('Timer: stopped');
	};

	useEffect(() => {
		// console.log('Timer: started');
		counterRef.current && clearInterval(counterRef.current);
		counterRef.current = setInterval(() => {
			setSeconds((s) => s + 1);
		}, 1000);
		return () => {
			stopCounting();
		};
	}, []);

	useEffect(() => {
		seconds === to.seconds && minutes === to.minutes
			? stopCounting()
			: seconds === 59 &&
			  (() => {
					setMinutes((m) => m + 1);
					setSeconds(0);
			  })();
	}, [to, seconds, minutes]);

	return { seconds, minutes, stopTimer: stopCounting };
};
