import css from './field.module.scss';

export function FieldLayout({ cells, onClick }) {
	return (
		<div className={css['field']}>
			{cells.map((player, i) => (
				// Неудобная работа с классами (вынести получение классов в функцию)?
				<button
					className={`${css['tile']} ${player === 1 ? css['tile_cross'] : ''} ${player === 2 ? css['tile_circle'] : ''}`}
					onClick={() => onClick(i)}
					key={i}
				></button>
			))}
		</div>
	);
}
