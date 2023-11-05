import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import './styles.css';
import Logo from '../../assets/mdblogo.svg';
import './styles.css';
import MenuPhoto from '../../assets/ProfilePhoto.svg';

const NavBar = () => {
    const [nome, setNome] = useState('');
 
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            openMovie();
        }
    }

   const navigation = useNavigate()
    const openMovie = () => {
        if (nome == '') {
            alert('Insira o nome do filme!');
            
        } else {
            navigation(`/search?q=${nome}`);
           
            // Certifique-se de que a rota '/search' esteja configurada em seu arquivo de roteamento.
        }
    }

    return (
        <nav className="navBar">
            <img src={Logo} id='logo' alt="" />
            <div className='search'>
                <input
                    type="text"
                    placeholder='Procure por um filme'
                    onChange={(e) => setNome(e.target.value)} 
                    onKeyPress={handleKeyPress} 
                />
                <BiSearchAlt2 onClick={() => openMovie()} className='iconSearch' />
            </div>
            <div>
                <img id='menu' src={MenuPhoto} alt="" />
            </div>
        </nav>
    )
}

export default NavBar;
