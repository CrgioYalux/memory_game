import './Board.css';
import { useEffect, useState, Fragment, useReducer } from 'react';
import { createBoard } from '../../helpers/BoardUtilities';

const boardReducer = (state, action) => {
	switch (action.type) {
		case 'activate':
			return {
				board: state.board.reduce((acc, arr) => {
					if (action.id === arr.id) arr.state = true;
					return [...acc, arr];
				}, []),
			};
		case 'clean':
			return {
				board: state.board.reduce((acc, arr) => {
					if (!arr.paired) arr.state = false;
					return [...acc, arr];
				}, []),
			};
		case 'restart':
			return {
				board: createBoard(action.difficulty),
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

const Board = ({ options }) => {
	const [actives, setActives] = useState([]);
	const [completed, setCompleted] = useState([]);

	const [{ board }, dispatch] = useReducer(boardReducer, {
		board: createBoard(options.difficulty),
	});

	const addToActives = (id, idx) => {
		console.log(board[idx].value);
		if (board[idx].value === '!') {
			// dispatch({ type: 'clean' });
			// dispatch({ type: 'restart', difficulty: options.difficulty });
			setCompleted([]);
			setActives([]);
		} else {
			setActives((c) => [...c, idx]);
			dispatch({ type: 'activate', id });
		}
	};

	useEffect(() => {
		if (actives.length === 2) {
			if (board[actives[0]].value === board[actives[1]].value)
				setCompleted((c) => [...c, board[actives[0]].value]);
			else dispatch({ type: 'clean' });
			setActives([]);
		}
	}, [actives, board]);

	useEffect(() => {
		dispatch({ type: 'update', completed });
	}, [completed]);

	// logs

	useEffect(() => {
		console.log(`actives : ${actives}`);
	}, [actives]);

	useEffect(() => {
		console.log(board);
	}, [board]);

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
