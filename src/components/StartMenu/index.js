import './StartMenu.css';
import { useState, useContext } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';

const StartMenu = () => {
	const [diff, setDiff] = useState(null);
	const { options, setOptions } = useContext(OptionsContext);

	const changeDiff = (selected) => {
		diff !== selected && setDiff(selected);
		console.log(options);
	};

	return (
		<div className="startmenu">
			<div className="startmenu-header">
				<h1>Welcome to the hardest memory game</h1>
				<h6>(  not even close  )</h6>
			</div>
			<div className="startmenu-options">
				<div className="options-diffs">
					<h3>pick a difficulty</h3>
					<form className="diffs-box">
						<input type="radio" name="diff" value="x3" id="x3" />
						<label
							htmlFor="x3"
							className="diff-option"
							onClick={() => changeDiff('x3')}
						>
							3x3
						</label>
						<input type="radio" name="diff" value="x5" id="x5" />
						<label
							htmlFor="x5"
							className="diff-option"
							onClick={() => changeDiff('x5')}
						>
							5x5
						</label>
						<input type="radio" name="diff" value="x7" id="x7" />
						<label
							htmlFor="x7"
							className="diff-option"
							onClick={() => changeDiff('x7')}
						>
							7x7
						</label>
					</form>
				</div>
				<div className="options-setts">
					<h3>settings</h3>
					<div className="setts-box">
						<div className="sett-option">Turn off background</div>
						<div className="sett-option">Languages</div>
					</div>
				</div>
			</div>
			<div className="startmenu-bt">GO!</div>
		</div>
	);
};

export default StartMenu;
