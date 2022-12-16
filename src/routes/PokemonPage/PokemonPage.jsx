// Libraries
import { useState, useEffect } from "react"

// Components
import PokemonCard from "../../components/PokemonCard"

// Enviroment Variables
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

async function getData(callback) {
  const response = await fetch(BASE_URL)
  const data = await response.json()

  callback(data.results)
}

/**
 * Page to display pokemons
 */
function PokemonPage() {
  const [ pokemonList, setPokemonList ] = useState(null)

  useEffect(
    () => {
      getData(setPokemonList)
    },
    []
  )

  return (
    <>
      <h2>Pokemon</h2>
      {
        pokemonList &&
        pokemonList.map(
          (element, index) => <PokemonCard key={index} {...element}/>
        )
      }
    </>
  )
}


export default PokemonPage