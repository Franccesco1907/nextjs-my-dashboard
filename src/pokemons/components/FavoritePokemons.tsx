'use client'

import { useAppSelector } from "@/store"
import { IoHeartOutline } from "react-icons/io5"
import { PokemonGrid } from "./PokemonGrid"
import { getFavoritePokemons } from "@/store/pokemons/pokemons"

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(getFavoritePokemons)

  return (
    <>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={favoritePokemons} />)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}