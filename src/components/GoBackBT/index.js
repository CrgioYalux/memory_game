import './GoBackBT.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { OptionsContext } from '../../hooks/OptionsContext';

const GoBackBT = () => {
	const location = useLocation();
	const { Link } = useContext(OptionsContext);

	return (
		location.pathname !== '/' && (
			<Link to="/" className="GoBackBT">
				{'<'}
			</Link>
		)
	);
};

export default GoBackBT;
