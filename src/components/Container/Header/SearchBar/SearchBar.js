import React from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../../../actions';

const SearchBar = () => {

    const onSearch = (term) => {
        console.log(term);
        searchMovies(term);
    }

    return (
        <form noValidate autoComplete="off" className="search">
            <input type="text" placeholder="Search Movies" className="search__input" onChange={e => onSearch(e.currentTarget.value)}></input>
        </form>
    );

}


export default connect(null, { searchMovies: searchMovies })(SearchBar);