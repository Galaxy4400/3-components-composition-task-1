import { InformationLayout } from "./InformationLayout";
import { PLAYERS_PIECES } from "../../shared/constants";

export function Information({isGameDraw, isGameEnded, currentPlayer}) {
	let message = '';

	if (isGameDraw) message = 'Ничья';
	if (isGameEnded && !isGameDraw) message = `Победа: ${PLAYERS_PIECES[currentPlayer]}`;  // Костыль?
	if (!isGameEnded && !isGameDraw) message = `Ходит: ${PLAYERS_PIECES[currentPlayer]}`;

	return <InformationLayout>{message}</InformationLayout>
}
