import React, { Component } from 'react';
import Logo from './Logo/Logo';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar/SearchBar';
import { loadPopularMovies, inputChange } from '../../../actions';
import { connect } from 'react-redux';

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
                <div style={{ visibility: 'hidden', width: '185px' }}></div>
            </header>
        );
    }

}

export default connect(null, { loadPopularMovies: loadPopularMovies, inputChange: inputChange })(Header);