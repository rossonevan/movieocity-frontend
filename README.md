# Moviocity
The web page we have created provides the user with a selection of movies that they can review. Each movie is contained inside a card. Inside each card there is: 

* The name of the movie
* The release date of the movie
* An image of the movie poster
    * If the user clicks on the image, reviews of the movie will be displayed underneath
    * Once displayed, the user can edit an existing review
* The average rating of the movie based on all review ratings
    * Rating changes and recalculates each time a review is added or removed
* The genre of the movie

# Web Page Functionality

On page load, all of the movies in the database are presented in the order of their ids. Underneath the title of the webpage, the user has the ability to search through the movies by typing the title of the movie they would like to see. The user also has the ability to filter the movies based on their genres by picking the genre they want in the drop down menu.

The main section of our webpage contains the movie cards, where a user is shown all the information of a movie. An `Add A Review` button is displayed at the bottom of each card allowing the user to create their own review of that movie. When clicked, three inputs are displayed allowing the user to insert:
* Rating
* Review Comment
* Name

Clicking the `Submit Review!` button will add that review to the card. If the user changes their mind about creating a review, they can click the `Cancel Adding Review` button and the inputs will disappear. The button changes back to `Add A Review`.

If a user wants to see the reviews related to a movie, by hovering over the image, the cursor will change to a pointer to let them know that the image is clickable. Once clicked, the reviews will be displayed underneath the image inside the movie card. The user will also have the ability to edit their review once submitted by clicking the `Edit Review` button. Once clicked, two inputs appear allowing the user to edit: 
* Rating
* Review Comment

They can then click the `Edit` button which will update that review's information in the database and will change the information displayed inside the card. If the user changes their mind about editing a review, they can click the `Cancel Editing Review` button and the inputs will disappear.

Lastly, the user will have the ability to remove a review by clicking the `Remove Review` button, deleting that review from the database and removes it from the card.

