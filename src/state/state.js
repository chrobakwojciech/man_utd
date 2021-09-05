import {AVAILABLE_PLAYERS} from "../data/players";
import {formations} from "../data/formations";

export const defaultPlayers = [
    AVAILABLE_PLAYERS[1],
    AVAILABLE_PLAYERS[2],
    AVAILABLE_PLAYERS[19],
    AVAILABLE_PLAYERS[5],
    AVAILABLE_PLAYERS[20],
    AVAILABLE_PLAYERS[39],
    AVAILABLE_PLAYERS[18],
    AVAILABLE_PLAYERS[17],
    AVAILABLE_PLAYERS[23],
    AVAILABLE_PLAYERS[7],
    AVAILABLE_PLAYERS[21]
]

export const defaultState = {
    theme: 'pl',
    players: defaultPlayers,
    positions: formations["3-5-2"]
}
