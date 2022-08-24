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
            <div className='edit-form'>
                <EditForm handlePatch={handlePatch} review={review} />
            </div>
            <button onClick={() => handleRemove(review.id) }>Remove Review</button>
        </div>)})
        


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
                    {isClicked ? <Form addReview = {addReview} movie={movie} /> : null}
                </div> 
            </card>
        </div>
    ) 
}


export default Movie_card;