import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import GetPokemon from "./GetPokemon";

export default function SearchPokemon() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const handleQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
    setIsSubmit(false);
  };

  const debouncedFetch = useDebounce(async () => {
    if (!isSubmit) return;

    try {
      if (query.length < 1) {
        throw new Error("Please enter a Pokemon name or ID.");
      }

      const response = await fetch(
        `${baseUrl}${query.toLocaleLowerCase().trim()}`
      );
      const json = await response.json();
      setResult(json);
    } catch (error) {
      if (query.length < 1) {
        setResult("Please enter a Pokemon name or ID.");
      } else {
        setResult("No Pokemon found! Please search again.");
      }
    } finally {
      setIsSubmit(false);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (typeof debouncedFetch === "function") {
      debouncedFetch();
    }
  };

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
                value={query}
                onChange={handleQuery}
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
