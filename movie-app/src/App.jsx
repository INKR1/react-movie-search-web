import { useState, useEffect } from 'react';

import MovieCard from './components/MovieCard';
import searchIcon from './search.svg';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=144c5ea3';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchFor, setSearchFor] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
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
            value={searchFor}
            onChange={(e) => setSearchFor(e.target.value)}
          />
          <img 
            src={searchIcon} 
            alt="search"
            onClick={() => searchMovies(searchFor)}
          />
        </div>
        { movies?.length > 0 ?
          (
            <div className='container'>
              {movies.map(movie => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }
    </div>
  );
}

export default App;
