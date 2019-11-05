import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {

const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
    .then(res => setCharacters(res.data.results))
    .catch(err  => { 
      console.log("err", err);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => {
        return (
          <CharacterCard
            character={character}
            key={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
            location={character.location}
            origin={character.origin}
          />
        );
      })}
    </section>
  );
}