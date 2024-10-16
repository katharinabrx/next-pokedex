import PokemonCard from "../components/PokemonCard/PokemonCard";
import { fetchPokemonList } from "../api/PokeAPI";
import { Pokemon, PokemonDetails, PokemonList } from "../types/pokemon";

export default async function Home() {
  const pokemonList = await fetchPokemonList(0, 20);

  return (
    <div className="">
      <main className="flex flex-col items-center p-2">
        <h1 className="text-4xl mb-6">Pokedex</h1>

        {!(pokemonList.length > 0) ? (
          <span>No Pokemons found</span>
        ) : (
          <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-inside">
            {pokemonList.map((pokemon: PokemonList) => (
              <li key={pokemon.id}>
                <PokemonCard
                  pokemonId={pokemon.id}
                  url={pokemon.url}
                  types={pokemon.types}
                  name={pokemon.name}
                />
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  );
}
