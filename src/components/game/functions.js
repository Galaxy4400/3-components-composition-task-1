import { WIN_PATTERNS } from '../../shared/constants';

export function isWin(cells, currentPlayer) {
	return WIN_PATTERNS.some((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
}

export function isDraw(cells) {
	return cells.every((field) => Boolean(field));
}

export function getWinPattern(cells, currentPlayer) {
	return WIN_PATTERNS.find((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
}
