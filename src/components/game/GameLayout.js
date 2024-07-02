import PropTypes from 'prop-types';
import { Field } from '../field/Field';
import { Information } from '../information/Information';
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
	cells: PropTypes.array,
	setCells: PropTypes.func,
	reset: PropTypes.func,
};
