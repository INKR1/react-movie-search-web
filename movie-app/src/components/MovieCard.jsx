import React from 'react'

export default function MovieCard({ movie: {imdbID, Year, Poster, Title, Type} }) {
  return (
        <div className='movie' key={imdbID}>
          <div>
            <p>{Year}</p>
          </div>
          <div>
          <img src={Poster !== 'N/A' ? Poster : 'http://via.placeholder.com/400'} alt={Title}/>
          </div>
          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
  )
}