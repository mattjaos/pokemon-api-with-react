import { useState } from "react";
import GetPokemon from "./GetPokemon";

export default function SearchPokemon() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const pokeApi = "https://pokeapi.co/api/v2/pokemon/";

  const handleQuery = (e) => {
    const { value } = e.target;
    setQuery(value.toLowerCase().trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${pokeApi}${query}`);
      const json = await response.json();
      setResult(json);
    } catch (error) {
      setResult("No Pokemon found! Please search again");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Search by Pokemon Name or ID</p>
            <p>
              <input type="text" value={query} onChange={handleQuery} />
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
