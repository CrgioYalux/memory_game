import './Board.css';
import { useEffect, useState, Fragment, useReducer, useRef } from 'react';
import {
	boardCreator,
	boardReducer,
	addClassToBorder,
} from '../../helpers/BoardUtilities';

const wait = 1000;

const Board = ({ options, dispatchScore }) => {
	const [actives, setActives] = useState([]);
	const [time, setTime] = useState(Date.now());
	const [completed, setCompleted] = useState([]);
	const [restarted, setRestarted] = useState(true);

	useEffect(() => {
		console.log(wait);
		console.log(options.difficulty);
		console.log(wait * options.difficulty);
	}, [options.difficulty]);

	const [{ board }, dispatchBoard] = useReducer(boardReducer, {
		board: boardCreator(options.difficulty),
	});

	const showthenhide = useRef(() => {
		dispatchBoard({ type: 'show' });
		const hide = setTimeout(() => {
			dispatchBoard({ type: 'hide' });
		}, wait * options.difficulty);
		return () => {
			clearTimeout(hide);
		};
	});

	const restart = useRef(() => {
		dispatchBoard({ type: 'restart', difficulty: options.difficulty });
		setCompleted([]);
		setActives([]);
		setTime(Date.now());
		showthenhide.current();
		setRestarted(true);
	});

	useEffect(() => {
		showthenhide.current();
	}, []);

	const addToActives = (id, idx) => {
		if (board[idx].value === '!') {
			dispatchScore({
				type: 'lose',
				difficulty: options.difficulty,
				time: new Date(Date.now() - time).getSeconds(),
			});
			restart.current();
		} else {
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

		const startNewGame = setTimeout(() => {
			winCondition && restart.current();
		}, wait * 0.5);

		winCondition &&
			dispatchScore({
				type: 'win',
				difficulty: options.difficulty,
				time: new Date(Date.now() - time).getSeconds(),
			});
		return () => {
			winCondition && clearTimeout(startNewGame);
		};
	}, [completed, options.difficulty, dispatchScore, time]);

	return (
		<div className={`board boardx${options.difficulty}`}>
			{board.map(({ value, selected, id, paired, position, hiding }, idx) => (
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
							hiding ? 'hiding' : 'not-hiding',
							addClassToBorder(position.x, position.y, options.difficulty),
						].join(' ')}
						onClick={() => addToActives(id, idx)}
					>
						{!hiding ? value : '?'}
						{/* {value} */}
					</label>
				</Fragment>
			))}
		</div>
	);
};

// Ahora despues de seleccionar, check los completados y comenzar una nueva partida hay un timeout
// Faltaria agregar timeouts para cuando se apreta el kill (???, y buscarle un mejor nombre) agregandole una animacion incluso
// Finalmente faltaria poder mostrar cuantas W y L se llevan, incluso el tiempo por partida
// En el menu faltaria una "base de datos" con las W y L y sus tiempos

export default Board;
