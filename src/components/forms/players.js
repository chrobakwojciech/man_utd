import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import PlayerSelect from "./player.select";

function PlayersForm() {
    return (
        <Box>
            {[...Array(11).keys()].map(index => {
                return (<PlayerSelect index={index}/>)
            })}
        </Box>
    )
}

export default PlayersForm