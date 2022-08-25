import { React, useState, useEffect } from 'react'
import Header from './Header';
import Movie_list from './Movie_list'
import Search from './Search';


function Home () {
    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState('');
    const [filterGenre, setFilterGenre] = useState(false);

    useEffect(() => {getMovies()}, [])

    const getMovies = () => {
        fetch('http://localhost:9292/')
        .then(resp => resp.json())
        .then(data => {setMovieData(data)})
    }
    
    const handleSearch = (string) => {
        setSearch(string)
    }

    const handlePatch = () => {
        getMovies()
    }


    const handleDelete = () => { 
        getMovies()
    }
    
    const filteredMovies = movieData.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    

    const handleFilterGenre = (filterGenre) => {
        setFilterGenre(filterGenre)
    }

    const sortedMovies = () => {
        if (filterGenre === "fantasy") {
            return filteredMovies.filter( movie => movie.genre.includes('Fantasy')
        )} else if (filterGenre === "horror") {
            return filteredMovies.filter( movie => movie.genre.includes('Horror')
        )} else if (filterGenre === "thriller") {
            return filteredMovies.filter( movie => movie.genre.includes('Thriller')
        )} else if (filterGenre === "comedy") {
            return filteredMovies.filter( movie => movie.genre.includes('Comedy')
        )} else if (filterGenre === "science_fiction") {
            return filteredMovies.filter( movie => movie.genre.includes('Science Fiction')
        )} else if (filterGenre === "romance") {
            return filteredMovies.filter( movie => movie.genre.includes('Romance')
        )} else if (filterGenre === "action") {
            return filteredMovies.filter( movie => movie.genre.includes('Action')
        )} else if (filterGenre === "war") {
            return filteredMovies.filter( movie => movie.genre.includes('War')
        )}  else
            return filteredMovies
    }
    


    function addReview (newReview) {
        
        const newState = movieData.map(obj => {
            if (obj.id === newReview.movie_id) {
                obj.reviews.push(newReview)
            }
            return obj;
          });
      
          setMovieData(newState);
    }

    return (
    <div className='home'>
        <Header />
            <Search handleSearch = {handleSearch} handleFilterGenre={handleFilterGenre}/>
            <Movie_list movieData = {sortedMovies()} handleDelete={handleDelete} handlePatch = {handlePatch} addReview = {addReview}/>
    </div>
    )
}


export default Home;