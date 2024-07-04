import { PLAYER } from "../constants";

export function getInitialState() {
	return [...Array(9)].fill(PLAYER.NOBODY);
}
