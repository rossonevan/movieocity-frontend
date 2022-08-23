import {React, useState, useEffect} from 'react'


function Movie_card ({movie}) {    
    const [reviewData, setReviewData] = useState([]);
    const [isClicked, setIsClicked] = useState(true)


    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
    }

    useEffect(() => {
        fetch(`http://localhost:9292/movies/${movie.id}`)
        .then(resp => resp.json())
        .then(data => {console.log(setReviewData(data))})
    }, [])


    return (
        <div className='movie-card'>
            <card className="card">
                <h1>{movie.title}</h1>
                <img src={movie.image} alt={movie.title}/>
                <h4>{movie.release_date}</h4>
                <h2>Rating: {movie.rating}</h2>
                <h3>Genre: {movie.genre}</h3>
                <div className='review-section'>
                    {isClicked ? (
                        <button onClick={handleClick} className='review-button'>Show Reviews</button>
                    ):(
                        <button onClick={handleClick} className='review-button'>Hide Reviews</button>
                    )}
                </div>
            </card>
        </div>
    ) 
}


export default Movie_card;