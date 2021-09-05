import React from 'react';
import '../App.css';
import {Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select,} from "@material-ui/core";
import Pitch from "./Pitch";
import { makeStyles } from '@material-ui/core/styles';
import {AppContext, defaultState} from "../state/state";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function App() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <AppContext.Provider value={defaultState}>
            <Box pt={4}>
                <Container maxWidth={"xl"}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        spacing={0}
                    >
                        <Grid item xs={2}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={7} >
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Pitch/>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </AppContext.Provider>

    );
}

export default App;
