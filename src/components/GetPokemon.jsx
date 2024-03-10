import QuerySuccessPokemon from "./QuerySuccessPokemon";

export default function GetPokemon({ result }) {
  return (
    <div>
      {typeof result === "string" ? (
        <p>
          <strong>{result}</strong>
        </p>
      ) : (
        <QuerySuccessPokemon result={result} />
      )}
    </div>
  );
}
