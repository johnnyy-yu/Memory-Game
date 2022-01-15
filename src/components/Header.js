import React from "react";

function Header(props) {
  const { score, highScore } = props;

  return (
    <header>
      <div className="header">
        <img className="header-icon" alt="icon" />
        <div className="header-title">Disney Memory Game</div>
      </div>
      <div className="score">
        <div className="current-score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
      </div>
    </header>
  );
}

export default Header;
