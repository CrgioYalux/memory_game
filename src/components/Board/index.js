import './Board.css';
import { useEffect, useState, Fragment, useRef } from 'react';
import {
	characterRange,
	getCharFromInt,
	shuffleArray,
} from '../../helpers/Ranges';

const Board = ({ options }) => {
	const [actives, setActives] = useState([]);
	const [completed, setCompleted] = useState([]);

	const addToActives = (id) => {
		setActives((c) => [...c, id]);
	};

	const labels = characterRange(
		'A',
		getCharFromInt((options.difficulty ** 2 - 1) / 2),
	);

	const board = useRef(
		shuffleArray(
			[...labels, ...labels, '!'].reduce(
				(acc, arr) => [...acc, { value: arr, state: false }],
				[],
			),
		),
	);

	useEffect(() => {
		console.log(`actives : ${actives}`);
		if (actives.length === 2) {
			if (board.current[actives[0]].value === board.current[actives[1]].value)
				setCompleted((c) => [...c, board.current[actives[0]].value]);
			setActives([]);
		}
		return () => {};
	}, [actives]);

	useEffect(() => {
		console.log(`completed : ${completed}`);
	}, [completed]);

	return (
		<div className={`boardx${options.difficulty}`}>
			{board.current.map(({ value, state }, id) => (
				<Fragment key={id}>
					<input
						type="checkbox"
						id={`el-${id}`}
						className="element-checkbox"
						value={`el-${id}`}
						readOnly={false}
						data-state={state}
					/>
					<label
						htmlFor={`el-${id}`}
						className="element"
						onClick={() => addToActives(id)}
					>
						{value}
					</label>
				</Fragment>
			))}
		</div>
	);
};

export default Board;
