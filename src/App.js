function App() {
  function handleClicker() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    let userInput = prompt("Veillez entrer votre numéro: ")
    alert(`Computer number: ${randomNum}, Your Guess: ${userInput}`)
  }
  return (
    <>
    <h1>Welcome to the "Guess Me" GAME !</h1>
    <button onClick={handleClicker}>Guess a number between 1 and 3</button>
    </>
  );
}

export default App;
