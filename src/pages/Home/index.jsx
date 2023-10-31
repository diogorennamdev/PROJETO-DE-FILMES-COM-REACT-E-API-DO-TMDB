import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


import CarroselBestMovies from '../../components/Carrosel';
import CarroselInical from '../../components/Carroselnicial/CarroselInicial';
import './styles.css';

const Home = () => {
  const [BestMovies, setBestMovies] = useState([]);
  console.log(BestMovies)

  const Imagens = BestMovies.map((BestMovie) => BestMovie.backdrop_path);


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
      <div className='Carrosel'>
        <CarroselInical
          images={Imagens}
        />
      </div>
      <div>
      {BestMovies &&
        <CarroselBestMovies
          movies={BestMovies}
        />
      }
      </div>
      


    </div>
  )
}

export default Home;