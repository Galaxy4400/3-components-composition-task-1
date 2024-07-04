import css from './field.module.scss';
import { getCellClassName } from '../../utils';

export function FieldLayout({ cells, cellClickHandler, winPattern }) {
	return (
		<div className={css['field']}>
			{cells.map((player, cellId) => (
				<button
					className={getCellClassName(player, cellId, winPattern)}
					onClick={() => cellClickHandler(cellId)}
					key={cellId}
				></button>
			))}
		</div>
	);
}
