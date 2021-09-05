import {players} from "../data/players";
import {formations} from "../data/formations";

export const defaultPlayers = [
    players[1],
    players[2],
    players[19],
    players[5],
    players[20],
    players[39],
    players[18],
    players[17],
    players[23],
    players[7],
    players[21]
]

export const defaultState = {
    theme: 'pl',
    players: defaultPlayers,
    positions: formations["3-5-2"]
}
