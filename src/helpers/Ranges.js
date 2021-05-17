export const range = (size, startAt = 0) => {
	return [...Array(size).keys()].map((i) => i + startAt);
};

export const characterRange = (startChar, endChar) => {
	return String.fromCharCode(
		...range(
			endChar.charCodeAt(0) - startChar.charCodeAt(0),
			startChar.charCodeAt(0),
		),
	);
};

export const getCharFromInt = (int) => {
	return String.fromCharCode(int + 65);
};

export const shuffleArray = (array) => {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

// const board = useRef(
// 	shuffleArray([
// 		...characterRange('A', getCharFromInt((options.difficulty ** 2 - 1) / 2)),
// 		...characterRange('A', getCharFromInt((options.difficulty ** 2 - 1) / 2)),
// 		'!',
// 	]),
// );

// const labels = characterRange(
// 	'A',
// 	getCharFromInt((options.difficulty ** 2 - 1) / 2),
// );

// const board = useRef(
// 	shuffleArray(
// 		[...labels, ...labels, '!'].reduce(
// 			(acc, arr, idx) => [...acc, { value: arr, state: false, id: idx }],
// 			[],
// 		),
// 	),
// );
