import React from 'react';
import '../App.css';
import {Box, Container, Grid} from "@material-ui/core";
import Pitch from "./Pitch";
import {defaultState} from "../state/state";
import ThemeForm from "./forms/theme";
import FormationForm from "./forms/formation";
import PlayersForm from "./forms/players";
import AppContextProvider from "../state/appContextProvider";

function App() {
    return (
        <AppContextProvider>
            <Box pt={4}>
                <Container maxWidth={"xl"}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        spacing={0}
                    >
                        <Grid item xs={2}>
                            <Box mb={2}><ThemeForm /></Box>
                            <Box mb={2}><FormationForm /></Box>
                            {/*<Box mb={2}><PlayersForm /></Box>*/}
                        </Grid>
                        <Grid item xs={7} >
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Pitch/>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </AppContextProvider>
    );
}

export default App;
