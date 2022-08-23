import React from "react";

function Form ({addReview}) {
    

    return (
        <form className="review-submit">
            <input className="input" name="rating" type="number" min="0" max="5" step="1" placeholder="Insert Rating Here" required />
            <textarea className="input" name="review" type='text' placeholder="Write Your Review Here" maxLength='500' required />
            <input className="input" name="name" type="text" placeholder="Insert Name Here" required />
            <button type="submit" className="submit-button">Submit Review!</button>
        </form>
    )
}

export default Form;