import './GoBackBT.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import icon from '../../assets/arrow.svg';

const GoBackBT = () => {
	const location = useLocation();

	return (
		location.pathname !== '/' && (
			<Link to="/" className="GoBackBT">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				</svg>
			</Link>
		)
	);
};

export default GoBackBT;
