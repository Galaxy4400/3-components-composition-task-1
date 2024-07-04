import { GAME_STATUS } from "../constants";
import { isDraw } from "../utils";

export function drawHandle(cells, { setGameStatus }) {
	if (!isDraw(cells)) return false;

	setGameStatus(GAME_STATUS.DRAW);

	return true;
}
