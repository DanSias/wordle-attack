import { useState } from "react";
import Keyboard from "./components/Keyboard";
import GameBoard from "./components/GameBoard";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [guess, setGuess] = useState([]);
  const handleLetter = (letter) => {
    if (["backspace", "del"].includes(letter)) {
      const theArray = [...guess];
      if (theArray.length > 0) {
        theArray.pop();
        setGuess((oldGuess) => theArray);
      }
      return;
    } else if (["enter", "return"].includes(letter)) {
      checkGuess();
      return;
    } else if ([...guess].length < 5) {
      setGuess((oldGuess) => [...oldGuess, letter]);
    } else {
      return;
    }
  };

  const checkGuess = () => {
    if ([...guess].length == 5) {
      alert("that was an enter!");
      if (guess == ["t", "a", "c", "o", "s"]) {
        alert("you did it");
      }
    }
  };

  return (
    <div className="bg-slate-700 flex flex-col">
      <header>
        <img src={logo} className="w-6" alt="logo" />
        <p>Current Guess: {guess.toString()}</p>
      </header>
      <div className="grow">
        <GameBoard />
      </div>
      <div className="">
        <Keyboard onLetter={handleLetter} />
      </div>
    </div>
  );
}

export default App;
