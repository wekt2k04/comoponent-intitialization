import './App.css'
import { useState } from "react";
import Heading from "./Heading";
function App() {

  const [word, setWord] = useState("Eat")
  function handleClick(){word === "Eat" ? setWord("Drink") : setWord("Eat")}

  return (
    <div className="card">
    < Heading message={word + " at Little Lemon"}/>
    <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
