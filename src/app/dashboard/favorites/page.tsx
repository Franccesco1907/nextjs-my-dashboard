import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'Ad minim sit cupidatat culpa consectetur.',
};

export default function FavoritePokemonsPage() {
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global State</small></span>

      {/* <PokemonGrid pokemons={ [] } /> */}
      <FavoritePokemons />

    </div>
  );
}