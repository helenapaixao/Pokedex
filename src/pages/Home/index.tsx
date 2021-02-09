import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import Header from '../../components/Header'


interface IPokemon {
  id:string;
  forms: {
    name:string

  }

  
  
}

export const Home : React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
  api.get('pikachu').then(resp =>  {
    setPokemons(resp.data); 
 /*  console.log(resp.data); */
  })
  },[])

  return (
    <>
    <Header/>
    <div>
 {pokemons.map((pokemon) => (
   <div key={pokemon.id}>
      <h1>{pokemon.forms}</h1>

     </div>
    )) }
    </div>
   
    <h1>Home</h1>
    </>
  )
}

export default Home;