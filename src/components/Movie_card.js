import React from 'react'


function Movie_card ({movie}) {    
    return (
        <div className='movie-card'>
            <card className="card">
                <h1>{movie.title}</h1>
                <img src={movie.image} alt={movie.title}/>
                <h4>{movie.release_date}</h4>
                <h2>{movie.rating}</h2>
                <h3>{movie.genre}</h3>
            </card>
        </div>
    ) 
}


export default Movie_card;