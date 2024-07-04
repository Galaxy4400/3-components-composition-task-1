import { WIN_PATTERNS } from "../constants";

export function isWin(cells, currentPlayer) {
	return WIN_PATTERNS.some((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
}
