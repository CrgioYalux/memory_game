import { characterRange, getCharFromInt, shuffleArray } from './ArrayUtilities';

export const boardCreator = (size) => {
	const labels = characterRange('A', getCharFromInt((size ** 2 - 1) / 2));

	return [
		...shuffleArray(
			[...labels, ...labels, '!'].reduce(
				(acc, arr, idx) => [
					...acc,
					{ value: arr, selected: false, id: idx, paired: false },
				],
				[],
			),
		),
	];
};

export const boardReducer = (state, action) => {
	switch (action.type) {
		case 'select':
			return {
				board: state.board.reduce((acc, arr) => {
					if (action.id === arr.id) arr.selected = true;
					return [...acc, arr];
				}, []),
			};
		case 'clean':
			return {
				board: state.board.reduce((acc, arr) => {
					if (!arr.paired) arr.selected = false;
					return [...acc, arr];
				}, []),
			};
		case 'restart':
			return {
				board: boardCreator(action.difficulty),
			};
		case 'update':
			return {
				board: state.board.reduce((acc, arr) => {
					action.completed.map((i) => {
						if (arr.value === i) arr.paired = true;
					});
					return [...acc, arr];
				}, []),
			};
		default:
			return;
	}
};
