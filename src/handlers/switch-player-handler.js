import { PLAYER } from "../constants";

export function switchPlayerHandler({setCurrentPlayer, currentPlayer}) {
	setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.CIRCLE : PLAYER.CROSS);
}
