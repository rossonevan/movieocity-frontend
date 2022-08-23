import {React, useState, useEffect} from 'react'


function Movie_card ({movie}) {    
    const [reviewData, setReviewData] = useState([]);
    const [isClicked, setIsClicked] = useState(true)


    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
    }
    let i = 1
    const reviewList = movie.reviews.map( review => 
       <div> 
            <h2>Review {i++}: {review.user.name} </h2> 
            <p>{review.comment}</p>
            <h3>Rating: {review.rating}/5</h3>
        </div>)

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
                    {isClicked ? null : [reviewList]}
                </div> 
            </card>
        </div>
    ) 
}


export default Movie_card;