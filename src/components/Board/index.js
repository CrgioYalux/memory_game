import './Board.css';
import { useEffect, useState, Fragment, useRef } from 'react';
import {
	characterRange,
	getCharFromInt,
	shuffleArray,
} from '../../helpers/Ranges';

const Board = ({ options }) => {
	const [actives, setActives] = useState([]);
	// const board = [...Array(options.difficulty ** 2).keys()].map((i) => i + 1);

	const addToActives = (id) => {
		setActives((c) => [...c, id]);
	};

	const board = useRef(
		shuffleArray([
			...characterRange('A', getCharFromInt((options.difficulty ** 2 - 1) / 2)),
			...characterRange('A', getCharFromInt((options.difficulty ** 2 - 1) / 2)),
			'!',
		]),
	);

	useEffect(() => {
		actives.length === 2 && setActives([]);
	}, [actives]);

	return (
		<div className={`boardx${options.difficulty}`}>
			{board.current.map((el, id) => (
				<Fragment key={id}>
					<input type="checkbox" id={`el-${id}`} className="element-checkbox" />
					<label
						htmlFor={`el-${id}`}
						className="element"
						onClick={() => addToActives(id)}
					>
						{el}
					</label>
				</Fragment>
			))}
			{/* {board.map((row, idr) => (
				<div key={idr} className="rows">
					{row.map((column, idel) => (
						<>
							<input type="checkbox" id="element" />
							<label key={idel} className="element" htmlFor="element">
								{column}
							</label>
						</>
					))}
				</div>
			))} */}
		</div>
	);
};

export default Board;
