import './GoBackBT.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowIcon from '../Icons/Arrow';

const styles = {
	position: 'relative',
	right: '2.5px',
	fill: 'white',
	transform: 'rotate(180deg)',
	width: '2rem',
	height: '2rem',
};

const GoBackBT = ({ goBackTo }) => {
	const location = useLocation();

	return (
		location.pathname !== goBackTo && (
			<Link to={goBackTo} className="GoBackBT">
				<ArrowIcon styles={styles} />
			</Link>
		)
	);
};

export default GoBackBT;
