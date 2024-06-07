/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import axios from 'axios'


function useCurrencyData() {
    const [pokemon, setPokemon] = useState({})
//   async function currencyData ()  {
//    const res = await axios.get(' https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json')
//    console.log(res.data)
//   }
async function downloadPokemon () {
    const  Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(Response.data)  
    setPokemon({
     name: Response.data.name,
     image: 
      Response.data.sprites.other.dream_world.front_default,
    
     weight: Response.data.weight,
     height: Response.data.height,
     types: Response.data.types.map((t) => t.type.name )
    })
   
    
   }
  useEffect(() =>{
downloadPokemon()
})

  return (
    <div>
        
    </div>
  )
}

export default useCurrencyData