import './Board.css';
import { useEffect, useState, Fragment } from 'react';

const createBoard = (size) => {
	return [...Array(size).keys()].map(() =>
		[...Array(size).keys()].map(() => 0),
	);
};

const Board = ({ options }) => {
	const [actives, setActives] = useState([]);
	// const board = createBoard(options.difficulty);
	const board = [...Array(options.difficulty ** 2).keys()].map((i) => i + 1);

	const addToActives = (id) => {
		setActives((c) => [...c, id]);
	};

	useEffect(() => {
		actives.length === 2 && setActives([]);
	}, [actives]);

	useEffect(() => {
		console.log(actives);
	}, [actives]);

	return (
		<div className={`boardx${options.difficulty}`}>
			{board.map((el, id) => (
				<Fragment key={id}>
					<input type="checkbox" id={`el-${el}`} className="element-checkbox" />
					<label
						htmlFor={`el-${el}`}
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
