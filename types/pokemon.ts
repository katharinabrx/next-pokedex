export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList extends Pokemon {
  id: number;
  types: string[];
}

export interface PokemonNameList {
  results: Pokemon[];
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  id: number;
  types: PokemonType[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  name: string;
}
