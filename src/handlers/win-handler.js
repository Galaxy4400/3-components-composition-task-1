import { GAME_STATUS } from "../constants";
import { getWinPattern, isWin } from "../utils";

export function winHandler(cells, { currentPlayer, setGameStatus, setWinPattern }) {
	if (!isWin(cells, currentPlayer)) return false;

	setWinPattern(getWinPattern(cells, currentPlayer));
	setGameStatus(GAME_STATUS.WIN);

	return true;
}
