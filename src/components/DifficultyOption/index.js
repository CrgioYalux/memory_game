import './DifficultyOption.css';
import { Fragment } from 'react';

const DifficultyOption = ({ level, select }) => {
	return (
		<Fragment>
			<input type="radio" name="diff" id={`x${level}`} />
			<label
				htmlFor={`x${level}`}
				className="diff-option"
				onClick={select}
			>{`${level}x${level}`}</label>
		</Fragment>
	);
};

export default DifficultyOption;
