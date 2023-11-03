import React from 'react';
const imageUrl = import.meta.env.VITE_IMG;
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './styles.css';

export const CardMovie = ({ movie }) => {
    const releaseDate = new Date(movie.release_date);
    const formattedDate = releaseDate.toLocaleDateString('pt-BR'); // 'pt-BR' é o código para o idioma Português do Brasil
   
    return (
        <Link to={`movie/${movie.id}`} className='CardMovie'>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{formattedDate}</h3>
                <p> <FaStar style={{ color: 'yellow' }} /> {movie.vote_average}</p>
            </div>

        </Link>
    )
}
