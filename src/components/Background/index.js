import './Background.css';

const Background = ({ display }) => {
	return display ? (
		<div className="back-moving"></div>
	) : (
		<div className="back-not-moving"></div>
	);
};
export default Background;
