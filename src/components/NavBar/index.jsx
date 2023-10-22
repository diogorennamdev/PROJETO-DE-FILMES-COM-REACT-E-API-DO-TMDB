import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import './styles.css';
import Logo from '../../assets/mdblogo.svg';
import './styles.css';
import ProfilePhoto from '../../assets/ProfilePhoto.svg';

const NavBar = () => {

    return (
        <nav className="navBar">
            <div className='ContainerSearch'>
                <img src={Logo} alt="" />

                <div className='search'>
                    <BiSearchAlt2 />
                    <input type="text" placeholder='Procure por um filme' />
                </div>

            </div>
            <div>
                <img src={ProfilePhoto} alt="" />
            </div>
        </nav>
    )
}

export default NavBar;
