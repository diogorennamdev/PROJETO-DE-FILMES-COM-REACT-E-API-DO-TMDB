import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import axios from 'axios';
import { BiChevronRight, BiDollarCircle, BiFile, BiCreditCard, BiAlarm } from 'react-icons/bi'
import './styles.css';

const Movie = () => {
  const moviesUrl = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imageUrl = import.meta.env.VITE_IMG;

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
 // console.log(movie)

  const fomatarcurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: 'currency',
      currency: 'USD',
    })
  };

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
    <>

      <NavBar />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className="ContainerDetails">
          <div className='Navigation'>
            <Link to={'/'} className='home'>Home</Link>
            <span><BiChevronRight /></span>
            <Link className='movie'>Filme</Link>
          </div>
          {movie ? (
            <div style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 400 }}>
              <div style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 400, display: 'flex' }}>
                <img src={imageUrl + movie.poster_path} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.tagline}</p>

              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h3> <BiCreditCard /> orçamento:</h3>
                  <p>{fomatarcurrency(movie.budget)}</p>
                </div>

                <div>
                  <h3> <BiDollarCircle /> Receita:</h3>
                  <p>{fomatarcurrency(movie.revenue)}</p>
                </div>
              </div>



              <div >
                <div>
                  <h3> <BiAlarm /> Duração:</h3>
                  <p>{movie.runtime} minutos</p>
                </div>
                <div>
                  <h3> <BiFile /> Descrição:</h3>
                  <p>{movie.overview} </p>
                </div>
              </div>

            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>

    </>
  );

};

export default Movie;
