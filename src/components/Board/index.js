import './Board.css';
import { useEffect, useState, Fragment, useReducer } from 'react';
import {
	boardCreator,
	boardReducer,
	addClassToBorder,
} from '../../helpers/BoardUtilities';

const Board = ({ options }) => {
	const [actives, setActives] = useState([]);
	const [completed, setCompleted] = useState([]);

	const [{ board }, dispatch] = useReducer(boardReducer, {
		board: boardCreator(options.difficulty),
	});

	const addToActives = (id, idx) => {
		if (board[idx].value === '!') {
			dispatch({ type: 'restart', difficulty: options.difficulty });
			setCompleted([]);
			setActives([]);
		} else {
			setActives((c) => [...c, idx]);
			dispatch({ type: 'select', id });
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

	// LOGS - S

	// useEffect(() => {
	// 	console.log(`actives : ${actives}`);
	// }, [actives]);

	// useEffect(() => {
	// 	console.log(board);
	// }, [board]);

	// useEffect(() => {
	// 	console.log(`completed : ${completed}`);
	// }, [completed]);

	// LOGS - E

	return (
		<div className={`boardx${options.difficulty}`}>
			{board.map(({ value, selected, id, paired, position }, idx) => (
				<Fragment key={id}>
					<input
						type="checkbox"
						id={`el-${id}`}
						className={'element-checkbox'}
						value={`el-${id}`}
						readOnly={selected}
						checked={selected}
						onChange={() => {}}
					/>
					<label
						htmlFor={`el-${id}`}
						className={[
							'element',
							paired ? 'paired' : 'not-paired',
							addClassToBorder(position.x, position.y, options.difficulty),
						].join(' ')}
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
