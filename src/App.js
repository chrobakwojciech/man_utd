import './App.css';
import { Stage, Sprite } from '@inlet/react-pixi';
import Player from "./Player";
import {players} from "./data/players";

const width = 1053
const height = 725;

const forward = height*0.2;
const midfielder = height*0.45;
const defender = height*0.65;
const gk = height*0.8;

const theme = 'cl';


function App() {
  return (
      <Stage width={1053} height={725}>
          <Sprite image={`./${theme}-bg.jpg`} x={0} y={0} />
          
          <Player theme={theme} player={players[10]} x={width*0.3} y={forward}/>
          <Player theme={theme} player={players[7]} x={width*0.5} y={forward-20}/>
          <Player theme={theme} player={players[11]} x={width*0.7} y={forward}/>

          <Player theme={theme} player={players[6]} x={width*0.38} y={midfielder-60}/>
          <Player theme={theme} player={players[39]} x={width*0.5} y={midfielder+30}/>
          <Player theme={theme} player={players[18]} x={width*0.62} y={midfielder-60}/>


          <Player theme={theme} player={players[23]} x={width*0.22} y={defender-20}/>
          <Player theme={theme} player={players[5]} x={width*0.4} y={defender}/>
          <Player theme={theme} player={players[19]} x={width*0.6} y={defender}/>
          <Player theme={theme} player={players[29]} x={width*0.78} y={defender-20}/>


          <Player theme={theme} player={players[1]} x={width*0.5} y={gk}/>

      </Stage>
  );
}

export default App;
