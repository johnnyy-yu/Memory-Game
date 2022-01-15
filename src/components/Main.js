import React, { useState, useEffect } from "react";
import fetchDisney from "./fetch";

export default function Main() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newChars, setNewChars] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);

      const array = [];

      for (let i = 0; i < 16; i += 1) {
        const data = fetchDisney();
        array.push(data);
      }

      setCharacters(await Promise.all(array));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [newChars]);

  function shuffleCharacters(array) {
    const currentArray = [...array];

    for (let i = currentArray.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      const temp = currentArray[i];
      currentArray[i] = currentArray[x];
      currentArray[x] = temp;
    }

    setCharacters(currentArray);
  }

  if (loading) return <span>loading</span>;

  if (!characters) return <span>Data Not available</span>;

  return (
    <div className="characters">
      <button
        type="button"
        onClick={() => (newChars ? setNewChars(false) : setNewChars(true))}
      >
        New characters
      </button>
      {characters.map((chars) => (
        <div aria-hidden className="character" key={chars.id}>
          <img
            aria-hidden
            src={chars.imageUrl}
            alt="character pic"
            onClick={() => shuffleCharacters(characters)}
          />
          <div className="character-name">{chars.name}</div>
          <div className="character-show">{chars.tvShows[0]}</div>
        </div>
      ))}
    </div>
  );
}
