import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { CardMovie } from '../../components/CardMovie';
import './styles.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const serachUrl = import.meta.env.VITE_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  console.log(movies);

  useEffect(() => {
    async function returnMovie() {
      const response = await axios.get(`${serachUrl}?${apiKey}&query=${query}`);
      setMovies(response.data.results);
    }
    returnMovie()
  }, [query])
  return (
    <div>
      <NavBar />

      <div className='containerTitle'>
        <h1>todos resultados para {query}</h1>
      </div>

      <div className='ContainerMovies'>
        {movies && movies.map((movie, index) => (
          <CardMovie
            key={index}
            movie={movie}
          />
        )


        )}
      </div>

    </div>
  );
};

export default Search;
