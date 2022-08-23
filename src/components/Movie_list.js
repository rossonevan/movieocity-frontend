import React from 'react'
import Movie_card from './Movie_card'


function Movie_list ({movieData}) {
    
    const movieComponents = movieData.map(movie => {
        return <Movie_card 
        movie = {movie}
        key = {movie.id}
        />
    })
    
    return (
        <div className='movie-list'>
            {movieComponents}
        </div>
    )
}


export default Movie_list;