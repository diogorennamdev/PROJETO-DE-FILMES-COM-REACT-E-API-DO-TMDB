import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { CardMovie } from '../CardMovie';

function CarroselBestMovies({ movies }) {

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '10',
        arrows: true,
        prevArrow: null, // Remova a seta "prev"
        nextArrow: null, // Remova a seta "next"
        responsive: [
            {
                breakpoint: 768, // Quando a tela for menor ou igual a 768px
                settings: {
                    slidesToShow: 2, // Mostra apenas 1 slide
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                {movies.map((movie, index) => (

                    <CardMovie
                        key={index}
                        movie={movie}
                    />

                ))}
            </Slider>

        </>
    );
}

export default CarroselBestMovies;
