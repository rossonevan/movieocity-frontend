import React from 'react'


function Movie_card () {    
    return (
        <div className='movie-card'>
            <card className="card">
                <h1>Movie Title Here</h1>
                <img src='https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=' alt='movie image' />
                <h4>Movie Release Date Here</h4>
                <h2>Movie Rating Here</h2>
            </card>
        </div>
    ) 
}


export default Movie_card;