import { useEffect } from 'react';

import MovieCard from './components/MovieCard';
import searchIcon from './search.svg';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=144c5ea3';

const movie1 = {
  "Title": "Godzilla: King of the Monsters",
  "Year": "2019",
  "imdbID": "tt3741700",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
}

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
          <input type="text" 
            placeholder="Search for a movie" 
            value="Godzilla"
            onChange={() => {}}
          />
          <img 
            src={searchIcon} 
            alt="search"
            onclick={() => {}}
          />
        </div>
        <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
