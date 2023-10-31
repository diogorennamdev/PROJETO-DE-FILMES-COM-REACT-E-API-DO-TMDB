import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { CardMovie } from '../CardMovie';

function CarroselBestMovies({ movies }) {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',
        arrows: false,
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
        <div className='ContainerCarrosel'>
            <Slider {...settings}>
                {movies.map((movie, index) => (

                    <CardMovie
                        key={index}
                        movie={movie}
                    />

                ))}
            </Slider>

        </div>
    );
}

export default CarroselBestMovies;
