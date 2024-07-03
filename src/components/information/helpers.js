import { PLAYERS_PIECES } from '../../shared/constants';

export function getTitle({ isGameDraw, isGameEnded, currentPlayer }) {
	let title;

	if (isGameDraw) {
		title = 'Ничья';
	} else if (isGameEnded) {
		title = `Победа: ${PLAYERS_PIECES[currentPlayer]}`;
	} else {
		title = `Ходит: ${PLAYERS_PIECES[currentPlayer]}`;
	}

	return title;
}
