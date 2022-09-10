import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url, id) => fetch(url + id).then((res) => res.json());

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export function Pokemon({ pokemonName = "raichu" }) {
  const [name, setName] = useState(pokemonName);
  const { data: pokemon, error } = useSWR<Pokemon, { message: string }>(
    name && name.trim() ? ["https://pokeapi.co/api/v2/pokemon/", name] : null,
    fetcher
  );

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
      {error ? (
        <p>An error has occurred: {error.message}</p>
      ) : !pokemon ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>
            {pokemon.name} - {pokemon.id}
          </h1>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            height={64}
            width={64}
            alt={pokemon.name}
          />
        </>
      )}
    </div>
  );
}
