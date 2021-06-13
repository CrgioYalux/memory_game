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

	const showthenhideRef = useRef();

	const clearShowThenHide = () => {
		showthenhideRef.current && clearTimeout(showthenhideRef.current);
	};

	const showthenhide = useRef(() => {
		dispatchBoard({ type: 'show' });
		clearShowThenHide();
		showthenhideRef.current = setTimeout(() => {
			dispatchBoard({ type: 'hide' });
		}, wait * options.difficulty);
	});

	useEffect(() => {
		showthenhide.current();
		return () => {
			clearShowThenHide();
		};
	}, [showthenhide]);

	const restart = useRef((result) => {
		dispatchBoard({ type: 'restart', difficulty: options.difficulty });
		setCompleted([]);
		setActives([]);
		showthenhide.current();
		setRestarted(true);
		handleWL(result);
	});

	const addToActives = (id, idx) => {
		if (board[idx].value === '!') restart.current('lose');
		else {
			setActives((c) => [...c, idx]);
			dispatchBoard({ type: 'select', id });
		}
	};

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
		const showPairs = setTimeout(() => {
			dispatchBoard({ type: 'update', completed });
		}, wait * 0.5);
		return () => {
			clearTimeout(showPairs);
		};
	}, [completed]);

	useEffect(() => {
		const winCondition = completed.length === (options.difficulty ** 2 - 1) / 2;
		if (winCondition) {
			const startNewGame = setTimeout(() => {
				restart.current('win');
			}, wait * 0.5);

			return () => {
				clearTimeout(startNewGame);
			};
		}
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
