import React, { Component } from 'react';
import Logo from './Logo/Logo';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar/SearchBar';
import { loadPopularMovies, inputChange } from '../../../actions';
import { connect } from 'react-redux';
import TMDBLogo from '../../../resources/TMDB_logo_long.png';

class Header extends Component {

    clickHandler = () => {
        this.props.loadPopularMovies();
        this.props.inputChange("");

    }

    render() {
        return (
            <header className="header">
                <Link style={{ textDecoration: 'none', color: '#e31c25' }} onClick={this.clickHandler}><Logo /></Link>
                <SearchBar />
                <div className="databaseLogo">
                    <img src={TMDBLogo} alt="The Movie Database logo" />
                </div>
            </header>
        );
    }

}

export default connect(null, { loadPopularMovies: loadPopularMovies, inputChange: inputChange })(Header);