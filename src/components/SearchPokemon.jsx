import { useState, useMemo, useEffect } from "react";
import GetPokemon from "./GetPokemon";

export default function SearchPokemon() {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState("");
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = useMemo(
    () => async () => {
      if (query === null) return;

      try {
        if (query.length < 1) {
          throw new Error("Please enter a Pokemon name or ID.");
        }

        const response = await fetch(`${baseUrl}${query}`);
        const json = await response.json();
        setResult(json);
      } catch (error) {
        if (query.length < 1) {
          setResult("Please enter a Pokemon name or ID.");
        } else {
          setResult("No Pokemon found! Please search again.");
        }
      }
    },
    [query]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemon_name_or_id = e.target.elements.pokemon_name_or_id.value
      .toLocaleLowerCase()
      .trim();
    setQuery(pokemon_name_or_id);
  };

  useEffect(() => {
    if (query !== null) fetchPokemon();
  }, [query, fetchPokemon]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="pokemon_name_or_id">
            <p>Search by Pokemon Name or ID</p>
            <p>
              <input
                id="pokemon_name_or_id"
                name="pokemon_name_or_id"
                type="text"
              />
            </p>
          </label>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
      <GetPokemon result={result} />
    </>
  );
}
