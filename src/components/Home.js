import { React, useState, useEffect } from 'react'
import Movie_list from './Movie_list'
import Search from './Search';


function Home () {
    const [movieData, setMovieData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/movies')
        .then(resp => resp.json())
        .then(data => {setMovieData(data)})
    }, [])

    
    
    return (<div className='home'>
        <Search />
        <Movie_list movieData = {movieData}/>
    </div>
    )
}


export default Home;