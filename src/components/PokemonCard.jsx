import { useState, useEffect } from "react";

async function getData(url, callback) {
  const response = await fetch(url)
  const data = await response.json()

  callback(data)
}

function PokemonCard(props) {
  const { name, url } = props

  const [ pokemonDetails, setPokemonDetails ] = useState(null)

  useEffect(
    () => {
      getData(url, setPokemonDetails)
    },
    []
  )

  return (
    <div className="m-2 bg-slate-400 rounded-lg p-2 flex w-60">
      <h3>{name}</h3>
      {
        pokemonDetails && 
        <img src={pokemonDetails.sprites.front_default} alt="image of pokemon" />
      }
    </div>
  )
}

export default PokemonCard;