import PropTypes from 'prop-types';
import { Field } from '../field/field';
import { Information } from '../information/information';
import css from './game.module.scss';

export function GameLayout({ ...props }) {
	return (
		<div className={css['game']}>
			<Information {...props} />
			<Field {...props} />
			{props.isGameEnded && <button onClick={() => props.reset()}>Начать заново</button>}
		</div>
	);
}

GameLayout.propTypes = {
	currentPlayer: PropTypes.number,
	isGameEnded: PropTypes.bool,
	isGameDraw: PropTypes.bool,
	winPattern: PropTypes.array,
	cells: PropTypes.array,
	setCells: PropTypes.func,
	reset: PropTypes.func,
	onClick: PropTypes.func,
};
