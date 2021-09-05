import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppContext} from "../../state/appContextProvider";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function FormationForm() {
    const {formation, updateFormation} = React.useContext(AppContext);

    const classes = useStyles();
    const [localFormation, setLocalFormation] = React.useState(formation);

    const handleChange = (event) => {
        const formation = event.target.value;
        setLocalFormation(formation);
        updateFormation(formation)
    };
    return (<FormControl fullWidth className={classes.formControl}>
        <InputLabel>Ustawienie</InputLabel>
        <Select
            value={localFormation}
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

export default FormationForm