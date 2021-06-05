import './Piece.css';
import { Fragment } from 'react';
import { addClassToBorder } from '../../helpers/BoardUtilities';
import QuestionIcon from '../Icons/Question';

const Piece = ({
	selected,
	paired,
	hiding,
	position,
	activate,
	difficulty,
	value,
	idx,
}) => {
	return (
		<Fragment>
			<input
				type="checkbox"
				id={`el-${idx}`}
				className={'element-checkbox'}
				readOnly={selected}
				checked={selected}
				onChange={() => {}}
			/>
			<label
				htmlFor={`el-${idx}`}
				className={[
					'element',
					paired ? 'paired' : 'not-paired',
					hiding ? 'hiding' : 'not-hiding',
					addClassToBorder(position.x, position.y, difficulty),
				].join(' ')}
				onClick={activate}
			>
				{!hiding ? (
					value
				) : (
					<QuestionIcon
						styles={{ fill: 'white', width: '.8em', height: '.8em' }}
					/>
				)}
			</label>
		</Fragment>
	);
};

export default Piece;
