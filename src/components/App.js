import React from 'react';
import '../App.css';
import {Box, Container, Grid} from "@material-ui/core";
import Pitch from "./Pitch";
import ThemeForm from "./forms/theme";
import FormationForm from "./forms/formation";
import PlayersForm from "./forms/players";
import AppContextProvider from "../state/appContextProvider";

function App() {
    return (
        <AppContextProvider>
            <Box pt={4}>
                <Container maxWidth={false}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        spacing={0}
                    >
                        <Grid item xs={2}>
                            <Box mb={0.5}><ThemeForm /></Box>
                            <Box mb={3}><FormationForm /></Box>
                            <PlayersForm/>
                        </Grid>
                        <Grid item xs={10} >
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
