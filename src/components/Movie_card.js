import {React, useState} from 'react'
import EditForm from './EditForm'
import Form from './Form'


function Movie_card ({movie, addReview, handleDelete, handlePatch}) {    
    const [isClicked, setIsClicked] = useState(false)
    const [showReviews, setShowReviews] = useState(false)
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("0");

    const toggleReviews = () => {
        setShowReviews(showReviews => !showReviews)
    }

    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
    }

    const handleRemove = (id) => {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE",
        })
        .then(() => handleDelete());
    }
    
    let i = 1
    const reviewList = movie.reviews.map( review => {
        return (
       <div> 
            <h2>Review {i++}: {review.user.name} </h2> 
            <p>{review.comment}</p>
            <h3>Rating: {review.rating}/5</h3>
            <>
                <EditForm handlePatch={handlePatch} review={review} />
            </>
            <button className = "remove-button" onClick={() => handleRemove(review.id) }>Remove Review</button>
        </div>)})
        
        let ratingSum = 0
        
        const calculateRating = (movie) => {
            movie.reviews.map ( review => {
                ratingSum = review.rating + ratingSum
                let i = 0
                i = i + 1
            })
            return (ratingSum/(i - 1)).toFixed(2)
        } 

    return (
        <div className='movie-card'>
            <card className="card">
                <h1 className ="card-title">{movie.title}</h1>
                <h2 className = "card-release-date">({movie.release_date})</h2>
                <img className = "card-image" onClick={toggleReviews} src={movie.image} alt={movie.title}/>
                <h2 className = "card-rating">Rating: {calculateRating(movie)}/5 </h2>
                <h3 className = "card-genre">Genre: {movie.genre}</h3>
                <div className='review-section'>
                    {showReviews ? reviewList : null}
                    {isClicked ? (<button className = "cancel-adding-button" onClick={handleClick} >Cancel  Adding  Review</button>) : (<button onClick={handleClick} className = "adding-button" >Add A Review</button>)}
                    <br></br>
                    {isClicked ? <Form addReview = {addReview} movie={movie} /> : null}
                </div> 
            </card>
        </div>
    ) 
}


export default Movie_card;