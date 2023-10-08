import { useState } from 'react'
import './App.css';
import { Link,Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <nav id="navBar">
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <h2>
          <Link to="/movie/1">movies</Link>

        </h2>

        <h2>
          <Link to="/search">movies</Link>
        </h2>
      </nav>
      <Outlet/>
    </>
  )
}

export default App
