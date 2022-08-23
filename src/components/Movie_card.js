import {React, useState} from 'react'
import Form from './Form'


function Movie_card ({movie, addReview}) {    
    const [isClicked, setIsClicked] = useState(false)
    const [showReviews, setShowReviews] = useState(false)

    const toggleReviews = () => {
        setShowReviews(showReviews => !showReviews)
    }

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
                <h2>({movie.release_date})</h2>
                <img onClick={toggleReviews} src={movie.image} alt={movie.title}/>
                <h2>Rating: </h2>
                <h3>Genre: {movie.genre}</h3>
                <div className='review-section'>
                    {showReviews ? reviewList : null}
                    {isClicked ? (<button onClick={handleClick} className='create-button'>Cancel Adding Review</button>) : (<button onClick={handleClick} className='create-button'>Add A Review</button>)}
                    <br></br>
                    {isClicked ? <Form addReview = {addReview} /> : null}
                </div> 
            </card>
        </div>
    ) 
}


export default Movie_card;