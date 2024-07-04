import css from '../components/field/field.module.scss';

export function getCellClassName(player, cellId, winPattern) {
	let className = [css['tile']];

	if (player === 1) className.push(css['tile_cross']);
	if (player === 2) className.push(css['tile_circle']);

	if (winPattern.some((winCellId) => winCellId === cellId)) {
		className.push(css['win']);
	}

	return className.join(' ');
}
