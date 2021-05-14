import './Board.css';

const createBoard = (size) => {
	return [...Array(size).keys()].map(() =>
		[...Array(size).keys()].map(() => 0),
	);
};

const Board = ({ options }) => {
	const board = createBoard(options.difficulty);
	return (
		<div className="board">
			{board.map((row, idr) => (
				<div key={idr} className="rows">
					{row.map((column, idel) => (
						<div key={idel} className="element">
							{column}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Board;
