import './Background.css';

const Background = ({ display }) =>
	display ? (
		<div className="back-moving"></div>
	) : (
		<div className="back-not-moving"></div>
	);

export default Background;
