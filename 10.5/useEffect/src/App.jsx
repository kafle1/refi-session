import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return pokemonData ? (
    <div>
      My pokemons: 
      {pokemonData.results.map((pokemon) => {
        return <p> {pokemon.name} </p>;
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;

// condition && do this
// condition ? do this : else do this
// condition ??

// axios
//   .get("https://pokeapi.co/api/v2/pokemon/")
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
