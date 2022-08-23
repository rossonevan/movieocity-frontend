import { React, useState, useEffect } from 'react'
import Header from './Header';
import Movie_list from './Movie_list'
import Search from './Search';


function Home () {
    const [movieData, setMovieData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:9292/movies')
        .then(resp => resp.json())
        .then(data => {setMovieData(data)})
    }, [])

    const handleSearch = (string) => {
        setSearch(string)
    }
    
    const filteredMovies = movieData.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    

    return (
    <div className='home'>
        <Header />
            <Search handleSearch = {handleSearch}/>
            <Movie_list movieData = {filteredMovies}/>
    </div>
    )
}


export default Home;