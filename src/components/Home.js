import { React, useState, useEffect } from 'react'
import Header from './Header';
import Movie_list from './Movie_list'
import Search from './Search';


function Home () {
    const [movieData, setMovieData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:9292/')
        .then(resp => resp.json())
        .then(data => {setMovieData(data)})
    }, [])

    const handleSearch = (string) => {
        setSearch(string)
    }

    const handleDelete = (string) => {
        setMovieData(string)
    }
    
    const filteredMovies = movieData.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    
    const addReview = newReview => {
        setMovieData(movie => [...movie, newReview])
    }

    return (
    <div className='home'>
        <Header />
            <Search handleSearch = {handleSearch}/>
            <Movie_list movieData = {filteredMovies} handleDelete={handleDelete} addReview = {addReview}/>
    </div>
    )
}


export default Home;