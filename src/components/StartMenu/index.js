import './StartMenu.css';

const StartMenu = () => {
	return (
		<div className="startmenu">
			<div className="startmenu-header">
				<h1>Welcome to the hardest memory game</h1>
				<h6>(  not even close  )</h6>
			</div>
			<div className="startmenu-options">
				<div className="options-diffs">
					<h3>pick a difficulty</h3>
					<div className="diffs-box">
						<input type="checkbox" id="x3" />
						<label htmlFor="x3" className="diff-option">
							3x3
						</label>
						<input type="checkbox" id="x5" />
						<label htmlFor="x5" className="diff-option">
							5x5
						</label>
						<input type="checkbox" id="x7" />
						<label htmlFor="x7" className="diff-option">
							7x7
						</label>
					</div>
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
