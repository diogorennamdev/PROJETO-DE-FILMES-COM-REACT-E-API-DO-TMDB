import React from 'react';
const imageUrl = import.meta.env.VITE_IMG;
import { FaStar } from 'react-icons/fa';
import './styles.css'
export const CardMovie = ({ movie }) => {
    return (
        <div className='CardMovie'>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            
            <h2>{movie.title}</h2>
            <p> <FaStar /> {movie.vote_average}</p>
        </div>
    )
}
