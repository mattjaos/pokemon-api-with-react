import SearchPokemon from "./components/SearchPokemon";
// prompt:
// https://pokeapi.co/
// Display a pokemon by ID or name
// this ID/name will come from a text input
//
// info to display:
// - ID
// - name
// - image
// - height (cm)
// - weight (kg)
// - type(s)

export default function App() {
  return (
    <div className="app">
      <h1>Find Pokemon</h1>
      <SearchPokemon />
    </div>
  );
}
