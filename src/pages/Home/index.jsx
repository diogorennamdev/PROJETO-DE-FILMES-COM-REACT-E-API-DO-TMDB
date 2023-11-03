import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import CarroselBestMovies from '../../components/Carrosel';
import ImagemInicial from '../../assets/ImagensFilmes/image1.svg';
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
      <section className='SectionIntroduction'>
        <img src={ImagemInicial} alt="imagem de um filme" />
        <div className='Text'>
          <h2>Seu novo conceito <br /> de Filmes</h2>
          <p>Não importa se você está em busca de emoções intensas, comédias hilariantes, dramas tocantes ou documentários informativos, temos algo para todos. Prepare-se para mergulhar em histórias cativantes e experimentar a magia do cinema conosco.</p>
          <button>Assine Agora</button>
        </div>

      </section>

      <section style={{display:'flex', justifyContent:'center',height:'900px'}}>
      <div className='ContainerBestMovies'>
        <h1>Melhores filmes:</h1>
        {BestMovies &&
          <CarroselBestMovies
            movies={BestMovies}
          />
        }
      </div>
      </section>
    



    </div>
  )
}

export default Home;