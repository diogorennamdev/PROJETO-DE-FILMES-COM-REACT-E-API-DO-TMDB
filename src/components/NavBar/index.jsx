import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import './styles.css';
import Logo from '../../assets/mdblogo.svg';
import './styles.css';
import MenuPhoto from '../../assets/ProfilePhoto.svg';

const NavBar = () => {

    return (
        <nav className="navBar">
            
                <img src={Logo}  id='logo' alt="" />

                <div className='search'>
                   
                    <input type="text" placeholder='Procure por um filme' />
                    <BiSearchAlt2  className='iconSearch'/>
                </div>

           
            <div>
                <img  id='menu' src={MenuPhoto} alt="" />
            </div>
        </nav>
    )
}

export default NavBar;
