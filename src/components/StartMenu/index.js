import './StartMenu.css';
import { useState, useContext, useEffect } from 'react';
import { OptionsContext } from '../../hooks/OptionsContext';

const StartMenu = () => {
	const [diff, setDiff] = useState(null);
	const [BGVisibility, setBGVisibility] = useState(true);
	const { options, setOptions, Link } = useContext(OptionsContext);

	const changeDiff = (selected) => {
		diff !== selected && setDiff(selected);
	};

	useEffect(() => {
		setOptions({
			background: BGVisibility,
			difficulty: diff,
			language: 'english',
		});
	}, [diff, BGVisibility, setOptions]);

	return (
		<>
			<div className="startmenu">
				<div className="startmenu-header">
					<h1 className={BGVisibility ? 'dark-text' : 'light-text'}>
						Welcome to the hardest memory game
					</h1>
					<h6 className={BGVisibility ? 'dark-text' : 'light-text'}>
						(  not even close  )
					</h6>
				</div>
				<div className="startmenu-options">
					<div className="options-diffs">
						<h3>pick a difficulty</h3>
						<form className="diffs-box">
							<input type="radio" name="diff" value="x3" id="x3" />
							<label
								htmlFor="x3"
								className="diff-option"
								onClick={() => changeDiff(3)}
							>
								3x3
							</label>
							<input type="radio" name="diff" value="x5" id="x5" />
							<label
								htmlFor="x5"
								className="diff-option"
								onClick={() => changeDiff(5)}
							>
								5x5
							</label>
							<input type="radio" name="diff" value="x7" id="x7" />
							<label
								htmlFor="x7"
								className="diff-option"
								onClick={() => changeDiff(7)}
							>
								7x7
							</label>
						</form>
					</div>
					<div className="options-setts">
						<h3>settings</h3>
						<div className="setts-box">
							<input type="checkbox" id="background-switch" />
							<label
								htmlFor="background-switch"
								className="sett-option"
								onClick={() => setBGVisibility((c) => !c)}
							>
								{BGVisibility ? 'Turn off background' : 'Turn on background'}
							</label>
							<div className="sett-option">Languages</div>
						</div>
					</div>
				</div>
				{diff ? (
					<Link to="/game" className="startmenu-bt">
						Go!
					</Link>
				) : null}
			</div>
		</>
	);
};

export default StartMenu;
