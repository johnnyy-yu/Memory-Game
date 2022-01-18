import React, { useState, useEffect } from "react";
import fetchDisney from "./fetch";

export default function Main(props) {
  const { score, setScore, highScore, setHighScore, difficulty, newChars } =
    props;

  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameArray, setGameArray] = useState([]);

  function scoreLogic() {
    return score > highScore ? (setHighScore(score), setScore(0)) : setScore(0);
  }

  useEffect(async () => {
    setLoading(true);
    scoreLogic();

    const array = [];

    for (let i = 0; i < difficulty; i++) {
      const data = fetchDisney();
      array.push(data);
    }

    setCharacters(await Promise.all(array));
    setLoading(false);
  }, [difficulty, newChars]);

  function shuffleCharacters(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[x];
      newArray[x] = temp;
    }

    setCharacters(newArray);
  }

  function gameLogic(e) {
    if (gameArray.includes(e.target.id)) {
      setGameArray([]);
      scoreLogic();
    } else {
      const newArray = [...gameArray];
      newArray.push(e.target.id);
      setGameArray(newArray);
      setScore((prevScore) => prevScore + 1);
    }
  }

  if (loading) return <div className="characters">Loading Characters</div>;

  if (!characters)
    return (
      <div className="characters">
        API not available. Try again by refreshing the page or pressing &quot
        New Characters &quot
      </div>
    );

  return (
    <div className="characters">
      {characters.map((chars) => (
        <div className="character" key={chars._id}>
          <div
            role="button"
            onClick={(e) => {
              shuffleCharacters(characters);
              gameLogic(e);
            }}
            tabIndex={0}
            onKeyDown={() => {}}
          >
            <img
              className="char-img"
              id={chars._id}
              src={chars.imageUrl}
              alt={chars.name}
            />
          </div>
          <div className="character-name">{chars.name}</div>
          <div className="character-show">
            {chars.tvShows.length > 0 ? chars.tvShows[0] : "Unknown"}
          </div>
        </div>
      ))}
    </div>
  );
}
