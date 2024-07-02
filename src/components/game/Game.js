import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { isWin, isDraw, getWinPattern, getUpdatedCells } from './functions';

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isGameDraw, setIsGameDraw] = useState(false);
	const [winPattern, setWinPattern] = useState([]);
	const [cells, setCells] = useState([...Array(9)].fill(null));

	function onClick(cellIndex) {
		if (cells[cellIndex]) return;
		if (isGameEnded) return;
		if (isGameDraw) return;

		const updateCels = getUpdatedCells(cells, cellIndex, currentPlayer);

		setCells(updateCels);

		if (checkWin(updateCels)) return;
		if (checkDraw(updateCels)) return;

		switchPlayer();
	}

	function switchPlayer() {
		setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
	}

	function checkWin(updateCels) {
		if (!isWin(updateCels, currentPlayer)) return false;

		setIsGameEnded(true);
		setWinPattern(getWinPattern(updateCels, currentPlayer));

		return true;
	}

	function checkDraw(updateCels) {
		if (!isDraw(updateCels)) return false;

		setIsGameEnded(true);
		setIsGameDraw(true);

		return true;
	}

	function reset() {
		setCurrentPlayer(1);
		setIsGameEnded(false);
		setIsGameDraw(false);
		setCells([...Array(9)].fill(null));
	}

	return (
		<GameLayout
			{...{
				currentPlayer,
				isGameEnded,
				isGameDraw,
				winPattern,
				cells,
				setCells,
				reset,
				onClick,
			}}
		/>
	);
}
