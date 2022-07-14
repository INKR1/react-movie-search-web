import { useEffect } from 'react';

import searchIcon from './search.svg';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=144c5ea3';

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    searchMovies('Godzilla');
  }, [])

  return (
    <div className="app">
      <h1>MovieNight</h1>
      <div className="searchField">
          <input type="text" placeholder="Search for a movie" />
          <img src={searchIcon} alt="search"/>
        </div>
    </div>
  );
}

export default App;
