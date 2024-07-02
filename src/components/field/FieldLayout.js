import PropTypes from 'prop-types';
import css from './field.module.scss';

export function FieldLayout({ cells, onClick, winPattern }) {
	return (
		<div className={css['field']}>
			{cells.map((player, i) => (
				<button
					className={`${css['tile']} ${player === 1 ? css['tile_cross'] : ''} ${player === 2 ? css['tile_circle'] : ''} ${winPattern.some((cellId) => cellId === i) ? css['win'] : ''}`}
					onClick={() => onClick(i)}
					key={i}
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
