import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

interface PokemonState {
  favorites: { [key: string]: SimplePokemon },
}

const initialState: PokemonState = {
  favorites: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon

      if (!!state.favorites[id]) {
        delete state.favorites[id]
      } else {
        state.favorites[id] = pokemon
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }
  },
  selectors: {
    getFavoritePokemons: createSelector(
      (sliceState: PokemonState) => sliceState.favorites,
      (favorites) => Object.values(favorites)
    )
  }
})


export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions
export const { getFavoritePokemons } = pokemonsSlice.selectors
export default pokemonsSlice.reducer