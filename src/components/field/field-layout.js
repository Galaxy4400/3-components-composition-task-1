import PropTypes from 'prop-types';
import css from './field.module.scss';
import { getClassName } from './helpers';

export function FieldLayout({ cells, onClick, winPattern }) {
	return (
		<div className={css['field']}>
			{cells.map((player, cellId) => (
				<button
					className={getClassName(player, cellId, winPattern)}
					onClick={() => onClick(cellId)}
					key={cellId}
				></button>
			))}
		</div>
	);
}

FieldLayout.propTypes = {
	cells: PropTypes.array,
	onClick: PropTypes.func,
	winPattern: PropTypes.array,
};
