import React from 'react'


function Search ({handleSearch, handleFilterGenre}) {
    
    const onFilter = (e) => {
        console.log(e.target.value)
        handleFilterGenre(e.target.value)
    }

    const onSearch = (e) => {
        handleSearch(e.target.value)
    }
    
    return (
        <div className='search'>
            <form className='box'>
                <input className='search-bar'
                onChange = {onSearch}
                type = 'text'
                placeholder='Search by title...'
                />
            </form>
            <br></br>
            <label className='genre-drop-down-label'>Search Genre: </label>
            <select name="genre-drop-down" className='genre-drop-down' onChange={onFilter}>
                <option value='default'>Show all</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
                <option value="comedy">Comedy</option>
                <option value="science_fiction">Science Fiction</option>
                <option value="romance">Romance</option>
                <option value="action">Action</option>
                <option value="war">War</option>
            </select>
        </div>
    )
}


export default Search;