import { arrayOfLetters, shuffleArray } from './ArrayUtilities';

export const boardCreator = (size) => {
	const labels = arrayOfLetters(size);

	let x = 0;
	let y = 0;

	const preBoard = shuffleArray(
		[...labels, ...labels, '!'].reduce((acc, arr, idx) => {
			return [
				...acc,
				{
					value: arr,
					selected: false,
					id: idx,
					paired: false,
					hiding: true,
				},
			];
		}, []),
	);

	return preBoard.reduce((acc, arr, idx) => {
		if (idx !== 0) {
			x++;
			if (x > size - 1) {
				x = 0;
				y++;
			}
		}
		return [...acc, { ...arr, position: { x, y } }];
	}, []);
};

export const boardReducer = (state, action) => {
	switch (action.type) {
		case 'select':
			return {
				board: state.board.reduce((acc, arr) => {
					if (action.id === arr.id) arr.selected = true;
					if (arr.hiding && action.id === arr.id) arr.hiding = false;
					return [...acc, arr];
				}, []),
			};
		case 'clean':
			return {
				board: state.board.reduce((acc, arr) => {
					if (!arr.paired && !arr.hiding) {
						arr.selected = false;
						arr.hiding = true;
					}
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
					for (const value of action.completed) {
						if (arr.value === value) {
							arr.paired = true;
							arr.hiding = false;
						}
					}
					return [...acc, arr];
				}, []),
			};
		case 'show':
			return {
				board: state.board.reduce((acc, arr) => {
					arr.hiding = false;
					arr.selected = true;
					return [...acc, arr];
				}, []),
			};
		case 'hide':
			return {
				board: state.board.reduce((acc, arr) => {
					if (!arr.paired) {
						arr.hiding = true;
						arr.selected = false;
					}
					return [...acc, arr];
				}, []),
			};
		default:
			throw new Error();
	}
};

export const addClassToBorder = (x, y, size) => {
	let styles = [];
	if (x === 0) styles = [...styles, 'border-left'];
	if (y === 0) styles = [...styles, 'border-top'];
	if (x === size - 1) styles = [...styles, 'border-right'];
	if (y === size - 1) styles = [...styles, 'border-bottom'];
	return styles.join(' ');
};

// don't look i'm legacy code since 2 min ago!
// return [
// 	...shuffleArray(
// 		[...labels, ...labels, '!'].reduce((acc, arr, idx) => {
// 			return [
// 				...acc,
// 				{
// 					value: arr,
// 					selected: false,
// 					id: idx,
// 					paired: false,
// 				},
// 			];
// 		}, []),
// 	),
// ];
