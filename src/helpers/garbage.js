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

// const [{ board }, dispatch] = useReducer(boardReducer, {
// 	board: [
// 		...shuffleArray(
// 			[...labels, ...labels, '!'].reduce(
// 				(acc, arr, idx) => [...acc, { value: arr, state: false, id: idx }],
// 				[],
// 			),
// 		),
// 	],
// });

// const labels = characterRange(
// 	'A',
// 	getCharFromInt((options.difficulty ** 2 - 1) / 2),
// );
