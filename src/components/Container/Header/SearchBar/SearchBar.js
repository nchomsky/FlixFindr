import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies, inputChange, loadPopularMovies } from '../../../../actions';

class SearchBar extends Component {

    handleChange = (event) => {
        this.props.inputChange(event.target.value);
        if (event.target.value === "") {
            this.props.loadPopularMovies();
        }

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchMovies(this.props.term);
    }

    render() {
        console.log(this.props.term);

        return (
            <form noValidate autoComplete="off" onSubmit={this.onFormSubmit} className="search">
                <input type="text" placeholder="Search Movies" className="search__input" value={this.props.term} onChange={this.handleChange}></input>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        term: state.movies.searchQuery,
    };
};


export default connect(mapStateToProps, {
    searchMovies: searchMovies,
    inputChange: inputChange,
    loadPopularMovies: loadPopularMovies
})(SearchBar);