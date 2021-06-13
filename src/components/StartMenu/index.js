import './StartMenu.css';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OptionsContext } from '../../hooks/OptionsContext';
import DifficultyOption from '../DifficultyOption';

const StartMenu = () => {
	const [diff, setDiff] = useState(null);
	const { options, setOptions } = useContext(OptionsContext);
	const [BGVisibility, setBGVisibility] = useState(options.background);

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
				<div className="startmenu-options">
					<div className="options-diffs">
						<h3>Difficulty</h3>
						<div className="diffs-box">
							<DifficultyOption level={3} select={() => changeDiff(3)} />
							<DifficultyOption level={5} select={() => changeDiff(5)} />
							<DifficultyOption level={7} select={() => changeDiff(7)} />
						</div>
					</div>
					<div className="options-setts">
						<h3>Settings</h3>
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
					<Link to="/memory_game/play" className="startmenu-bt">
						Go!
					</Link>
				) : null}
			</div>
		</>
	);
};

export default StartMenu;
