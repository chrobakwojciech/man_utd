import React, {createContext, useState} from "react";
import {defaultPlayers} from "./state";
import {formations} from "../data/formations";

export const AppContext = createContext(null);

const defaultTheme = 'pl';
const defaultFormation = '3-5-2';

const getDefaultPlayers = defaultPlayers.map((player, index) => {
    return {
        ...player,
        position: {
            x: formations[defaultFormation][index].x,
            y: formations[defaultFormation][index].y,
            name: formations[defaultFormation][index].name

        }
    }
})

export default function AppContextProvider({children}) {
    const [theme, setTheme] = useState(defaultTheme)
    const [formation, setFormation] = useState(defaultFormation)
    const [players, setPlayers] = useState(getDefaultPlayers)

    const updateFormation = (formation) => {
        const positions = formations[formation];

        const currentPlayers = [...players];
        const newPlayers = currentPlayers.map((player, index) => {
            return {
                ...player,
                position: {
                    x: positions[index].x,
                    y: positions[index].y,
                    name: positions[index].name
                }
            }
        })
        setPlayers(newPlayers);
        setFormation(formation)
    }

    const movePlayer = (index, x, y) => {
        const newPlayers = [...players];
        newPlayers[index].position = {
            x, y
        }
        setPlayers(newPlayers);
    }

    const updatePlayer = (index, player) => {
        const newPlayers = [...players];
        newPlayers[index] = {
            ...newPlayers[index],
            ...player
        }
        setPlayers(newPlayers)
    }

    const exportedValues = {
        theme,
        setTheme,
        formation,
        players,
        movePlayer,
        updatePlayer,
        updateFormation
    };

    return (
        <AppContext.Provider value={exportedValues}>
            {children}
        </AppContext.Provider>
    )
}