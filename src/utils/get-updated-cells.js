export function getUpdatedCells(cells, cellIndex, currentPlayer) {
	const updatedCells = [...cells];

	updatedCells[cellIndex] = currentPlayer;

	return updatedCells;
}
