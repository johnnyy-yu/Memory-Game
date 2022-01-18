import React, { useState } from "react";
import "./App.css";
import "./queries.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState(12);
  const [newChars, setNewChars] = useState(false);

  return (
    <div className="app">
      <Header
        score={score}
        highScore={highScore}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        newChars={newChars}
        setNewChars={setNewChars}
      />
      <Main
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        difficulty={difficulty}
        newChars={newChars}
      />
    </div>
  );
}

export default App;
