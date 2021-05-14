import './Game.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';

const Game = () => {
	const { options, setOptions } = useContext(OptionsContext);

	return (
		<>
			<div>
				<h3>the gamme</h3>
			</div>
		</>
	);
};

export default Game;
