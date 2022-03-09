import './App.css';
import Container from './components/basic/container';
import BoxSizing from './components/basic/boxsizing';
import Display from './components/basic/display';
import Overflow from './components/basic/overflow'
import Positions from './components/basic/positions';
import Zindex from './components/basic/zindex';
import Direction from './components/flexbox/directions';
import Wrap from './components/flexbox/wrap';
import Order from './components/flexbox/order';
import Cols from './components/grid/cols'


function App() {
  return (
    <>
      {
      /* 
      Container
      <Container />
      Boxsizing
      <BoxSizing />
      Display
      <Display />
      Overflow
      <Overflow />
      Positions
      <Positions />
      Z-index
      <Zindex /> */}
      <Direction />
      <Wrap />
      <Order/>
      <Cols/>
    </>
  );
}

export default App;
