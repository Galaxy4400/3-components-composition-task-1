import { useEffect, useState } from 'react';
import { GameLayout } from './GameLayout';
import { WIN_PATTERNS } from '../../shared/constants';

// Структура файлов? Почему не jsx?
export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState(2);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isGameDraw, setIsGameDraw] = useState(false);
	const [cells, setCells] = useState([...Array(9)].fill(null));

	// Ругается на зависимости?
	useEffect(() => {
		checkWin();
		checkDraw();
		switchPlayer();
	}, [cells]);

	// Как не свичить игрока после изменения статуса игры
	function switchPlayer() {
		setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
	}

	function checkWin() {
		if (!isWin()) return;

		setIsGameEnded(true);
	}

	function checkDraw() {
		if (!isDraw()) return;

		setIsGameEnded(true);
		setIsGameDraw(true);
	}

	function isWin() {
		return WIN_PATTERNS.some((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
	}

	function isDraw() {
		return cells.every((field) => Boolean(field));
	}

	function reset() {
		setCurrentPlayer(0);
		setIsGameEnded(false);
		setIsGameDraw(false);
		setCells([...Array(9)].fill(null));
	}

	// Не нравится портянка пробросов?
	return (
		<GameLayout
			{...{
				currentPlayer,
				isGameEnded,
				isGameDraw,
				cells,
				setCells,
				reset,
			}}
		/>
	);
}
