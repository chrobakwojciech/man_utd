import logo from './logo.svg';
import './App.css';
import { Stage, Container, Sprite } from '@inlet/react-pixi';

function App() {
  return (
      <Stage>
          <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" x={100} y={100} />
      </Stage>
  );
}

export default App;
