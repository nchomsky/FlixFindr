import React from 'react';

const SearchBar = () => {
    return (
        <form noValidate autoComplete="off" className="search">
            <input type="text" value="Search" className="search__input"></input>
        </form>
    );

}

export default SearchBar;