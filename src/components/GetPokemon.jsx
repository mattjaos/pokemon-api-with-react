import QuerySuccessPokemon from "./QuerySuccessPokemon";

export default function GetPokemon({ result }) {
  return (
    <>
      {typeof result === "string" ? (
        <div>
          <p>
            <strong>{result}</strong>
          </p>
        </div>
      ) : (
        <QuerySuccessPokemon result={result} />
      )}
    </>
  );
}
