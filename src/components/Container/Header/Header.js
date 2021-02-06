import React, { Component } from 'react';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Logo />
                <SearchBar />
                <div style={{ visibility: 'hidden', width: '185px' }}></div>
            </header>
        );
    }

}

export default Header;