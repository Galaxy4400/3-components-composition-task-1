import { useState } from 'react';
import { GameLayout } from './game-layout';
import { GAME_STATUS, PLAYER } from '../../constants';
import { getInitialState } from '../../utils';
import { cellClickHandler, resetHandler } from '../../handlers';



export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [gameStatus, setGameStatus] = useState(GAME_STATUS.TURN);
	const [winPattern, setWinPattern] = useState([]);
	const [cells, setCells] = useState(getInitialState());

	const state = {
		currentPlayer,
		setCurrentPlayer,
		gameStatus,
		setGameStatus,
		winPattern,
		setWinPattern,
		cells,
		setCells,
	};

	return (
		<GameLayout
			{...state}
			cellClickHandler={(cellIndex) => cellClickHandler(cellIndex, state)}
			handleReset={() => resetHandler(state)}
		/>
	);
}
