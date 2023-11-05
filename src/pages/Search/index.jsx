import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { CardMovie } from '../../components/CardMovie';
import './styles.css';

const Search = () => {
  const navigation = useNavigate();
  const [movies, setMovies] = useState([]);
  const serachUrl = import.meta.env.VITE_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [isLoading, setIsLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    async function returnMovie() {
      const response = await axios.get(`${serachUrl}?${apiKey}&query=${query}`);
      setMovies(response.data.results);
      setIsLoading(false); // Quando os filmes forem carregados, definimos isLoading como falso.
    }
    returnMovie();
  }, [query]);

  function openDetails(Id) {
    navigation(`/search/movie/${Id}`);
  }

  return (
    <div>
      <NavBar />

      <div className='containerTitle'>
        <h1>Todos resultados para <span style={{ color: 'yellow', fontWeight: 'bold' }}>{query}</span> </h1>
      </div>

      <div className='ContainerMovies'>
        {isLoading ? ( // Verifica se isLoading é verdadeiro
          <p>Carregando...</p> // Exibe mensagem de carregamento
        ) : (
          movies.map((movie, index) => (
            <CardMovie
              key={index}
              movie={movie}
              funcao={() => openDetails(movie.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
