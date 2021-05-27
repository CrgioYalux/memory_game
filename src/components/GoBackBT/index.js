import './GoBackBT.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GoBackBT = () => {
	const location = useLocation();

	return (
		location.pathname !== '/' && (
			<Link to="/" className="GoBackBT">
				{'<'}
			</Link>
		)
	);
};

export default GoBackBT;
