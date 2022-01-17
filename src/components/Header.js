import React from "react";

function Header(props) {
  const { score, highScore, difficulty, setDifficulty } = props;

  return (
    <header>
      <div className="header">
        <img className="header-icon" alt="icon" />
        <div className="header-title">Disney Memory Game</div>
      </div>
      <div className="score">
        <div className="current-score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
        <input
          type="range"
          className="difficulty-slider"
          defaultValue={difficulty}
          onMouseUp={(e) => {
            setDifficulty(e.target.value);
          }}
          min="4"
          max="32"
          step="4"
        />
      </div>
    </header>
  );
}

export default Header;
