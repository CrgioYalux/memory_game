import './Board.css';
import { useEffect, useState, Fragment, useReducer, useRef } from 'react';
import {
	boardCreator,
	boardReducer,
	addClassToBorder,
} from '../../helpers/BoardUtilities';

const Board = ({ options, dispatchScore }) => {
	const [actives, setActives] = useState([]);
	const [time, setTime] = useState([Date.now()]);
	const [completed, setCompleted] = useState([]);

	const [{ board }, dispatchBoard] = useReducer(boardReducer, {
		board: boardCreator(options.difficulty),
	});

	const restart = useRef(() => {
		dispatchBoard({ type: 'restart', difficulty: options.difficulty });
		setCompleted([]);
		setActives([]);
		setTime(Date.now());
	});

	const addToActives = (id, idx) => {
		if (board[idx].value === '!') {
			dispatchScore({
				type: 'lose',
				difficulty: options.difficulty,
				time: `${new Date(Date.now() - time).getSeconds()} seconds`,
			});
			restart.current();
		} else {
			setActives((c) => [...c, idx]);
			dispatchBoard({ type: 'select', id });
		}
	};

	useEffect(() => {
		if (actives.length === 2) {
			if (board[actives[0]].value === board[actives[1]].value)
				setCompleted((c) => [...c, board[actives[0]].value]);
			else dispatchBoard({ type: 'clean' });
			setActives([]);
		}
	}, [actives, board]);

	useEffect(() => {
		dispatchBoard({ type: 'update', completed });
	}, [completed]);

	useEffect(() => {
		if (completed.length === (options.difficulty ** 2 - 1) / 2) {
			dispatchScore({
				type: 'win',
				difficulty: options.difficulty,
				time: `${new Date(Date.now() - time).getSeconds()} seconds`,
			});
			restart.current();
		}
	}, [completed, options.difficulty, dispatchScore, time]);

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
		<div className={`board boardx${options.difficulty}`}>
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
