import Child from './Child'

function App() {
  const date = new Date()

  return (
    <>
    <Child message={date.toLocaleTimeString()} />
    </>
  );
}

export default App;
