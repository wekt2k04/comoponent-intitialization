import './App.css';
import Card from './Card';

const randNum = () => Math.floor(Math.random() * 100) + 1
function App() {
  return (
    <>
    <Card num={randNum()}/>
    <Card num={randNum()}/>
    <Card num={randNum()}/>
    </>
  );
}

export default App;
