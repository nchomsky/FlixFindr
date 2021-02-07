import React from 'react';

const SearchBar = () => {
    return (
        <form noValidate autoComplete="off" className="search">
            <input type="text" placeholder="Search Movies" className="search__input" ></input>
        </form>
    );

}

// onChange={e => onSearch(e.currentTarget.value)}

export default SearchBar;