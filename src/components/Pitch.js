import {Sprite, Stage} from "@inlet/react-pixi";
import Player from "./Player";
import React from "react";
import {AppContext} from "../state/state";

function Pitch() {
    const {players, theme, formation} = React.useContext(AppContext);

    return (
        <Stage width={1053} height={725}>
            <Sprite image={`./img/bg/${theme}-bg.jpg`} x={0} y={0}/>
            {players.map(((player, index) => <Player player={player} position={formation[index]}/>))}
        </Stage>
    )
}

export default Pitch;