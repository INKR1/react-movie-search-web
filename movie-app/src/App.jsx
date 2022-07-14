import { useEffect } from 'react';

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
    </div>
  );
}

export default App;
