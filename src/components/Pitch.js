import {Sprite, Stage} from "@inlet/react-pixi";
import Player from "./Player";
import React from "react";
import {AppContext} from "../state/appContextProvider";

function PitchBg({ theme }) {
    return (
        <Sprite image={`./img/bg/${theme}-bg.jpg`} x={0} y={0}/>
    )
}
function Pitch() {
    const context = React.useContext(AppContext);
    return (
        <Stage width={1053} height={725}>
            <PitchBg theme={context.theme}/>
            {[...Array(11).keys()].map(((index) => <Player context={context} index={index} key={index}/>))}
        </Stage>
    )
}

export default Pitch;