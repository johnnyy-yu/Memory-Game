import React from "react";
import icon from "../icon/disneyIcon.png";
import settingIcon from "../icon/setting.png";

export default function Header(props) {
  const { score, highScore, difficulty, setDifficulty, newChars, setNewChars } =
    props;

  return (
    <header>
      <div className="header">
        <img className="header-icon" src={icon} alt="icon" />
        <div className="header-title">Disney Memory Game</div>
      </div>
      <div className="score-options">
        <div className="score">
          <div className="current-score">Score: {score}</div>
          <div className="high-score">High Score: {highScore}</div>
        </div>
        <div className="options">
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            onClick={() => {
              const diff =
                document.getElementsByClassName("difficulty")[0].style.display;

              if (diff === "flex") {
                document.querySelector(".difficulty").style.display = "none";
                document.querySelector(".new-character").style.display = "none";
              } else {
                document.querySelector(".difficulty").style.display = "flex";
                document.querySelector(".new-character").style.display =
                  "block";
              }
            }}
          >
            <img className="setting-icon" src={settingIcon} alt="settings" />
          </div>
          <div className="difficulty">
            Difficulty
            <input
              type="range"
              className="difficulty-slider"
              list="tickmarks"
              defaultValue={difficulty}
              onMouseUp={(e) => {
                setDifficulty(e.target.value);
              }}
              min="4"
              max="32"
              step="4"
            />
          </div>
          <datalist id="tickmarks">
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </datalist>
          <button
            type="button"
            className="new-character"
            onClick={() => (newChars ? setNewChars(false) : setNewChars(true))}
          >
            New Characters
          </button>
        </div>
      </div>
    </header>
  );
}
