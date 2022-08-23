import React from 'react'


function Search ({handleSearch}) {
    
    const onSearch = (e) => handleSearch(e.target.value)
    
    return (
        <div className='search'>
            <form className='box'>
                <input className='search-bar'
                onChange = {onSearch}
                type = 'text'
                placeholder='Search by title...'
                />
            </form>
        </div>
    )
}


export default Search;