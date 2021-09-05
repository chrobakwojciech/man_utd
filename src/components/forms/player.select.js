import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AVAILABLE_PLAYERS} from "../../data/players";
import {AppContext} from "../../state/appContextProvider";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0.2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function PlayerSelect({index = 1}) {
    const {players, updatePlayer} = React.useContext(AppContext);
    const classes = useStyles();
    const [playerNumber, setPlayerNumber] = React.useState(players[index].number);

    const handleChange = (event) => {
        const newNumber = event.target.value;
        setPlayerNumber(newNumber);
        updatePlayer(index, AVAILABLE_PLAYERS[newNumber])
    };
    return (<FormControl fullWidth  className={classes.formControl}>
        <InputLabel>{players[index].position.name}</InputLabel>
        <Select
            value={playerNumber}
            onChange={handleChange}
        >
            {Object.values(AVAILABLE_PLAYERS).sort((a, b) => a.order - b.order).map((k) => {
                return (<MenuItem key={k.number} value={k.number}>{`${k.number}. ${k.name}`}</MenuItem>)
            })}
        </Select>
    </FormControl>)
}

export default PlayerSelect