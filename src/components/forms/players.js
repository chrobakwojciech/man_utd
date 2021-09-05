import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function PlayersForm() {
    const classes = useStyles();
    const [formation, setFormation] = React.useState('4-3-3');

    const handleChange = (event) => {
        setFormation(event.target.value);
    };
    return (<FormControl fullWidth className={classes.formControl}>
        <InputLabel>Zawodnicy</InputLabel>
        <Select
            value={formation}
            onChange={handleChange}
        >
            <MenuItem value={'4-4-2'}>4-4-2</MenuItem>
            <MenuItem value={'4-2-3-1'}>4-2-3-1</MenuItem>
            <MenuItem value={'4-3-3'}>4-3-3</MenuItem>
            <MenuItem value={'3-5-2'}>3-5-2</MenuItem>
            <MenuItem value={'3-4-3'}>3-4-3</MenuItem>
        </Select>
        <Select
            value={formation}
            onChange={handleChange}
        >
            <MenuItem value={'4-4-2'}>4-4-2</MenuItem>
            <MenuItem value={'4-2-3-1'}>4-2-3-1</MenuItem>
            <MenuItem value={'4-3-3'}>4-3-3</MenuItem>
            <MenuItem value={'3-5-2'}>3-5-2</MenuItem>
            <MenuItem value={'3-4-3'}>3-4-3</MenuItem>
        </Select>
    </FormControl>)
}

export default PlayersForm