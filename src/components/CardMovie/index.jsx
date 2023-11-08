import React from 'react';
const imageUrl = import.meta.env.VITE_IMG;
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

export const CardMovie = ({ movie,funcao }) => {
    const releaseDate = new Date(movie.release_date);
    const formattedDate = releaseDate.toLocaleDateString('pt-BR'); // 'pt-BR' é o código para o idioma Português do Brasil
    const navigation = useNavigate();
    const openDetails = () => {
        navigation(`movie/${movie.id}`)
    }
    return (
        <div onClick={() => funcao()} className='CardMovie'>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'transparent' }}>
                <h3>{formattedDate}</h3>
                <p> <FaStar style={{ color: 'yellow',backgroundColor:'transparent' }} /> {movie.vote_average}</p>
            </div>
        </div>
    )
}
