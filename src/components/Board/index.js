import './Board.css';
import { useEffect, useState, useReducer, useRef } from 'react';
import { boardCreator, boardReducer } from '../../helpers/BoardUtilities';
import Piece from '../Piece';

const wait = 1000;

const Board = ({ options, handleWL }) => {
	const [actives, setActives] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [restarted, setRestarted] = useState(true);

	const [{ board }, dispatchBoard] = useReducer(boardReducer, {
		board: boardCreator(options.difficulty),
	});

	const showThenHideTimeOutRef = useRef();

	const clearShowThenHide = () => {
		showThenHideTimeOutRef.current &&
			clearTimeout(showThenHideTimeOutRef.current);
	};

	const showThenHideRef = useRef(() => {
		dispatchBoard({ type: 'show' });
		clearShowThenHide();
		showThenHideTimeOutRef.current = setTimeout(() => {
			dispatchBoard({ type: 'hide' });
		}, wait * options.difficulty);
	});

	const restart = useRef((result) => {
		handleWL(result);
		dispatchBoard({ type: 'restart', difficulty: options.difficulty });
		setCompleted([]);
		setActives([]);
		setRestarted(true);
		showThenHideRef.current();
	});

	const addToActives = (id, idx) => {
		board[idx].value === '!'
			? restart.current('lose')
			: (() => {
					setActives((c) => [...c, idx]);
					dispatchBoard({ type: 'select', id });
			  })();
	};

	useEffect(() => {
		showThenHideRef.current();
		return () => {
			clearShowThenHide();
		};
	}, [showThenHideRef]);

	useEffect(() => {
		const cleanBoard = !restarted
			? setTimeout(() => {
					dispatchBoard({ type: 'clean' });
					setActives([]);
			  }, wait)
			: null;

		if (actives.length === 2) {
			if (board[actives[0]].value === board[actives[1]].value)
				setCompleted((c) => [...c, board[actives[0]].value]);
			setActives([]);
		}
		actives.length !== 0 && setRestarted(false);

		return () => {
			cleanBoard && clearTimeout(cleanBoard);
		};
	}, [actives, board, restarted]);

	useEffect(() => {
		completed.length === (options.difficulty ** 2 - 1) / 2
			? restart.current('win')
			: dispatchBoard({ type: 'update', completed });
	}, [completed, options.difficulty]);

	return (
		<div className={`board boardx${options.difficulty}`}>
			{board.map((piece, idx) => (
				<Piece
					key={piece.id}
					selected={piece.selected}
					paired={piece.paired}
					hiding={piece.hiding}
					position={piece.position}
					activate={() => addToActives(piece.id, idx)}
					difficulty={options.difficulty}
					value={piece.value}
					idx={idx}
				/>
			))}
		</div>
	);
};

export default Board;
