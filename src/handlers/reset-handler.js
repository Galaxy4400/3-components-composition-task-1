import { GAME_STATUS, PLAYER } from "../constants";
import { getInitialState } from "../utils";

export function resetHandler({setCurrentPlayer, setGameStatus, setCells, setWinPattern}) {
	setCurrentPlayer(PLAYER.CROSS);
	setGameStatus(GAME_STATUS.TURN);
	setCells(getInitialState());
	setWinPattern([]);
}
