import { WIN_PATTERNS } from "../constants";

export function getWinPattern(cells, currentPlayer) {
	return WIN_PATTERNS.find((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
}
