import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState(16);

  return (
    <div>
      <Header
        score={score}
        highScore={highScore}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <Main
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        difficulty={difficulty}
      />
    </div>
  );
}

export default App;
