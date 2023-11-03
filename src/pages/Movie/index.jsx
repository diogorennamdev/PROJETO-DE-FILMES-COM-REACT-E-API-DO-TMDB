import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const Movie = () => {
  const moviesUrl = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imageUrl = import.meta.env.VITE_IMG;

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function returnMovie() {
      try {
        const response = await axios.get(`${moviesUrl}${id}?${apiKey}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    returnMovie();
  }, []);

  return (
    <div className="ContainerDetails">
      {movie ? (
        <>
          <h3>{movie.title}</h3>
          <img src={imageUrl + movie.backdrop_path} alt={movie.title} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Movie;
