import {AVAILABLE_PLAYERS} from "../data/players";
import {formations} from "../data/formations";

export const defaultPlayers = [
    AVAILABLE_PLAYERS[1],
    AVAILABLE_PLAYERS[20],
    AVAILABLE_PLAYERS[5],
    AVAILABLE_PLAYERS[6],
    AVAILABLE_PLAYERS[12],
    AVAILABLE_PLAYERS[14],
    AVAILABLE_PLAYERS[17],
    AVAILABLE_PLAYERS[8],
    AVAILABLE_PLAYERS[25],
    AVAILABLE_PLAYERS[9],
    AVAILABLE_PLAYERS[10]
]

export const defaultState = {
    theme: 'pl',
    players: defaultPlayers,
    positions: formations["4-3-3"]
}
