export function isDraw(cells) {
	return cells.every((field) => Boolean(field));
}
