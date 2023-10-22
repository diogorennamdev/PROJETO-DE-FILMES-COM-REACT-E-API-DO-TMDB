import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


import CarroselBestMovies from '../../components/Carrosel';
const Home = () => {
  const [BestMovies, setBestMovies] = useState([]);
  console.log('todos filmes', BestMovies);


  async function ReturnBestMovies(url) {
    try {
      const response = await axios.get(url);
      setBestMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const AllMovies = `${movieUrl}top_rated?${apiKey}`
    ReturnBestMovies(AllMovies)
  }, [])

  return (
    <div>
      <NavBar />
      {BestMovies.length === 0 && <p>Carregando</p>}
      {BestMovies &&
        <CarroselBestMovies
          movies={BestMovies}
        />

      }

    </div>
  )
}

export default Home;