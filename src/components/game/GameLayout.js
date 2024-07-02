import { Field } from '../field/Field';
import { Information } from '../information/Information';
import css from './game.module.scss';

export function GameLayout({reset, ...props}) {
	return (
		<div className={css['game']}>
			<Information {...props} />
			<Field {...props} />
			{props.isGameEnded && <button onClick={() => reset()}>Начать заново</button>}
		</div>
	);
}
