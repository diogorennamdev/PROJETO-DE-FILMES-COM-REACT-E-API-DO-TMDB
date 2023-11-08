import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { CardMovie } from '../CardMovie';
import { useNavigate } from 'react-router-dom';

function CarroselBestMovies({ movies }) {
const navigation = useNavigate();
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: movies.length === 1,
        centerPadding: '10',
        arrows: true,
        prevArrow: null, // Remova a seta "prev"
        nextArrow: null, // Remova a seta "next"
        responsive: [
            {
                breakpoint: 1200, // Quando a tela for menor ou igual a 1200px
                settings: {
                    slidesToShow: 3, // Mostra 3 slides
                },
            },
            {
                breakpoint: 992, // Quando a tela for menor ou igual a 992px
                settings: {
                    slidesToShow: 2, // Mostra 2 slides
                },
            },
            {
                breakpoint: 768, // Quando a tela for menor ou igual a 768px
                settings: {
                    slidesToShow: 1, // Mostra 1 slide
                },
            },
        ],
    };
    function OpenDetails(Id) {
        navigation(`/search/movie/${Id}`)
    }
    return (
        <>
            <Slider {...settings}>
                {movies.map((movie, index) => (

                    <CardMovie
                        key={index}
                        movie={movie}
                        funcao={() => OpenDetails(movie.id)}
                    />

                ))}
            </Slider>

        </>
    );
}

export default CarroselBestMovies;
