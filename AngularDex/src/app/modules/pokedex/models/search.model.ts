export interface pokemonNav {
  name: string;
  sprites: { [key: string]: string };
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
