import { useState } from 'react';
import { GameLayout } from './game-layout';
import { isWin, isDraw, getWinPattern, getUpdatedCells } from './helpers';

const initialState = [...Array(9)].fill(null);

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isGameDraw, setIsGameDraw] = useState(false);
	const [winPattern, setWinPattern] = useState([]);
	const [cells, setCells] = useState(initialState);

	function onClick(cellIndex) {
		if (cells[cellIndex] || isGameEnded || isGameDraw) return;

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
		setCells(initialState);
		setWinPattern([]);
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
