import css from './game.module.scss';
import { Field } from '../field/field';
import { Information } from '../information/information';
import { GAME_STATUS } from '../../constants';

export function GameLayout({ ...props }) {
	return (
		<div className={css['game']}>
			<Information {...props} />
			<Field {...props} />
			{props.gameStatus !== GAME_STATUS.TURN && <button onClick={() => props.handleReset()}>Начать заново</button>}
		</div>
	);
}
