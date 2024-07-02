import { FieldLayout } from './FieldLayout';

export function Field({ cells, setCells, currentPlayer, isGameEnded, isGameDraw }) {
	function onClick(cellIndex) {
		if (cells[cellIndex]) return;
		if (isGameEnded) return;
		if (isGameDraw) return;

		setCells(getNewCells(cellIndex));
	}

	function getNewCells(cellIndex) {
		const newcells = [...cells];

		newcells[cellIndex] = currentPlayer;

		return newcells;
	}

	return <FieldLayout {...{ cells, onClick }} />;
}
