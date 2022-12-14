import { React, useState } from "react";

function EditForm ({handlePatch, review}) {
    
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)
    const [editForm, setEditForm] = useState(false)

    const toggleEditForm = () => {
        setEditForm(editForm => !editForm)
    }

    const handleEditForm = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${review.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating
            })
        })
        .then((resp) => resp.json())
        .then(newReview => handlePatch(newReview))
        e.target.reset()
    }

    const editFormInputs = 
        <form className="review-submit" onSubmit={handleEditForm}>
            <input onChange={(e) => setRating(e.target.value)} className="input" name="rating" type="number" min="0" max="5" step="1" placeholder="Insert Rating Here" required />
            <textarea onChange={(e) => setComment(e.target.value)} className="input" name="comment" type='text' placeholder="Write Your Review Here" maxLength='500' required />
            <button type="submit" className="submit-edit-button">Edit</button>
            
        </form>

    return (
        <>
        {editForm ? <button className = "cancel-edit-button" onClick={toggleEditForm}>Cancel Editing Review</button> : <button className = "edit-button" onClick={toggleEditForm}>Edit Review</button> }
        {editForm ? editFormInputs: null}
        </>
    )
}

export default EditForm;