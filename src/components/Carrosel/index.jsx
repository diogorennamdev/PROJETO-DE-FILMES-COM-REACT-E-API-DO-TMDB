import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import './styles.css';
import { CardMovie } from '../CardMovie';

function CarroselBestMovies({movies}) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20',
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Quando a tela for menor ou igual a 768px
                settings: {
                    slidesToShow: 1, // Mostra apenas 1 slide
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>
                {movies.map((movie, index) => (

                    <CardMovie
                        movie={movie}
                    />

                ))}
            </Slider>

        </div>
    );
}

export default CarroselBestMovies;
