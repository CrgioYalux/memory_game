export const getTime = (checkpoint) => {
	const deltaTime = new Date(Date.now() - checkpoint).getSeconds();

	console.log(deltaTime);

	let seconds = Math.floor(deltaTime / 60) >= 1 ? deltaTime % 60 : deltaTime;
	let minutes = deltaTime / 60 >= 1 ? Math.floor(deltaTime / 60) : 0;
	let hours = deltaTime / 3600 >= 1 ? Math.floor(deltaTime / 3600) : 0;

	return {
		seconds,
		minutes,
		hours,
	};
};
