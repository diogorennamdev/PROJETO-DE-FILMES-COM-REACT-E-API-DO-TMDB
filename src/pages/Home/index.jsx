import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const genderUrl = import.meta.env.VITE_GENDER;
const FilterGender = import.meta.env.VITE_FILTER;

import CarroselBestMovies from '../../components/Carrosel';
import ImagemInicial from '../../assets/ImagensFilmes/image1.svg';
import './styles.css';

const Home = () => {
  const [BestMovies, setBestMovies] = useState([]);
  const [genders, setGenders] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(""); 

  //console.log(genders)
  async function ReturnGender() {
    try {
      const response = await axios.get(`${genderUrl}?${apiKey}`);
      setGenders(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  }

  async function ReturnBestMovies() {
    try {
      const response = await axios.get(`${movieUrl}top_rated?${apiKey}`);
      setBestMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  async function ReturnMoviesByGenre(genderId) {
    try {
      const response = await axios.get(`${FilterGender}?${apiKey}&with_genres=${genderId}`);
      setGenderFilter(response.data.results);
    } catch (error) {
      console.log(error);
      return []; // Retorna uma lista vazia em caso de erro
    }
  };

  useEffect(() => {
    ReturnBestMovies();
    ReturnGender();
    ReturnMoviesByGenre(selectedGenre);
  }, []);


  // Função para lidar com a mudança de seleção de gênero
  const handleGenreChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);

    if (selectedValue !== "") {
      ReturnMoviesByGenre(selectedValue);
    }
  };
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

      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='ContainerBestMovies'>
          <h1>Melhores filmes:</h1>
          {BestMovies &&
            <CarroselBestMovies
              movies={BestMovies}
            />
          }
        </div>
      </section>

      <section className="SectionGenders">
        <h1>Generos:</h1>
        <div className="GenreCarousels">
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value={genders.map((gender) => gender.id[0])}>Selecione um gênero</option>
            {genders &&
              genders.map((gender) => (
                <option key={gender.id} value={gender.id}>
                  {gender.name}
                </option>
              ))}
          </select>
          <CarroselBestMovies movies={genderFilter} />
        </div>
      </section>

    </div>
  )
}

export default Home;