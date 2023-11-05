import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import Movie from './pages/Movie/index.jsx';
import Search from './pages/Search/index.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/movie/:id' element={<Movie />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
