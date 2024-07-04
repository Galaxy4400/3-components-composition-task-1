import { GAME_STATUS, PLAYER } from '../constants';
import { getUpdatedCells } from '../utils';
import { drawHandle } from './draw-handler';
import { switchPlayerHandler } from './switch-player-handler';
import { winHandler } from './win-handler';

export function cellClickHandler(cellIndex, state) {
	const { cells, gameStatus, currentPlayer, setCells } = state;

	if (cells[cellIndex] !== PLAYER.NOBODY || gameStatus !== GAME_STATUS.TURN) return;

	const updateCels = getUpdatedCells(cells, cellIndex, currentPlayer);

	setCells(updateCels);

	if (winHandler(updateCels, state)) return;
	if (drawHandle(updateCels, state)) return;

	switchPlayerHandler(state);
}
