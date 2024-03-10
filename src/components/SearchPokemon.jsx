// import { useState } from "react";
import DisplayPokemon from "./DisplayPokemon";

export default function SearchPokemon() {
  return (
    <>
      <div>
        <label>
          <p>Search by Pokemon Name or ID</p>
          <p>
            <input type="text" value="" />
          </p>
        </label>
      </div>
      <DisplayPokemon />
    </>
  );
}
