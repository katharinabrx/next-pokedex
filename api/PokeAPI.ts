import { Pokemon, PokemonDetails, PokemonNameList } from "../types/pokemon";

const BASE_ROUTE = "https://pokeapi.co/api/v2/";

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function fetchPokemonList(offset: number, limit: number) {
  try {
    const url = `${BASE_ROUTE}/pokemon/?offset=${offset}&limit=${limit}`;
    const data = await fetchData<PokemonNameList>(url);
    const pokemonUrls = data.results.map((pokemon: Pokemon) => pokemon.url);

    const promises = await Promise.all(
      pokemonUrls.map((url: string) => fetchData<PokemonDetails>(url))
    );

    const result = promises.map((item) => ({
      name: item.name,
      id: item.id,
      url: item.sprites.other["official-artwork"].front_default,
      types: item.types.map((type) => type.type.name),
    }));

    return result;
  } catch (error) {
    console.error("Error fetching Pokemon List:", error);
    throw error;
  }
}
