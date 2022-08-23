import React from 'react'
import Movie_card from './Movie_card'


function Movie_list ({movieData, addReview}) {
    
    const movieComponents = movieData.map(movie => {
        return <Movie_card 
        addReview = {addReview}
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