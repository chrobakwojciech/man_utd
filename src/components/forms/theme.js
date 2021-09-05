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

function ThemeForm() {
    const ctx = React.useContext(AppContext);
    const {setTheme, theme} = React.useContext(AppContext);

    const classes = useStyles();
    const [localTheme, setLocalTheme] = React.useState(theme);

    const handleChange = (event) => {
        const theme = event.target.value;
        setLocalTheme(theme);
        setTheme(theme)
    };

    return (<FormControl fullWidth className={classes.formControl}>
        <InputLabel>Kolorystyka</InputLabel>
        <Select
            value={localTheme}
            onChange={handleChange}
        >
            <MenuItem value={'pl'}>Domyślna</MenuItem>
            <MenuItem value={'cl'}>Champions League</MenuItem>
        </Select>
    </FormControl>)
}

export default ThemeForm