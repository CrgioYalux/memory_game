import './Board.css';
import { useEffect, useState, Fragment, useReducer } from 'react';
import {
	characterRange,
	getCharFromInt,
	shuffleArray,
} from '../../helpers/Ranges';

const boardReducer = (state, action) => {
	switch (action.type) {
		case 'activate':
			return {
				board: state.board.reduce((acc, arr) => {
					if (action.id === arr.id) arr.state = true;
					return [...acc, arr];
				}, []),
			};
		case 'restart':
			return {
				board: state.board.reduce((acc, arr) => {
					arr.state = false;
					return [...acc, arr];
				}, []),
			};
		default:
			return;
	}
};

const Board = ({ options }) => {
	const [actives, setActives] = useState([]);
	const [completed, setCompleted] = useState([]);

	const labels = characterRange(
		'A',
		getCharFromInt((options.difficulty ** 2 - 1) / 2),
	);

	const [{ board }, dispatch] = useReducer(boardReducer, {
		board: [
			...shuffleArray(
				[...labels, ...labels, '!'].reduce(
					(acc, arr, idx) => [...acc, { value: arr, state: false, id: idx }],
					[],
				),
			),
		],
	});

	const addToActives = (id, idx) => {
		console.log(board[idx].value);
		if (board[idx].value === '!') {
			dispatch({ type: 'restart' });
			setActives([]);
		} else {
			setActives((c) => [...c, idx]);
			dispatch({ type: 'activate', id });
		}
	};

	useEffect(() => {
		console.log(`actives : ${actives}`);
		if (actives.length === 2) {
			if (board[actives[0]].value === board[actives[1]].value)
				setCompleted((c) => [...c, board[actives[0]].value]);
			setActives([]);
		}
	}, [actives, board]);

	useEffect(() => {
		console.log(`completed : ${completed}`);
	}, [completed]);

	return (
		<div className={`boardx${options.difficulty}`}>
			{board.map(({ value, state, id }, idx) => (
				<Fragment key={id}>
					<input
						type="checkbox"
						id={`el-${id}`}
						className="element-checkbox"
						value={`el-${id}`}
						readOnly={state}
						checked={state}
						onChange={() => {}}
					/>
					<label
						htmlFor={`el-${id}`}
						className="element"
						onClick={() => addToActives(id, idx)}
					>
						{value}
					</label>
				</Fragment>
			))}
		</div>
	);
};

export default Board;
