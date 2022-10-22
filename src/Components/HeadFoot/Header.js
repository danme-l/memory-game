import React, { Component } from "react";
import './HeadFoot.css';
import rickLogo from './icons8-rick-sanchez.svg';
import mortyLogo from './icons8-morty-smith.svg';

class Header extends Component {
    render() {
        return (
        <header id="header" className="App-header-footer">
            <img src={rickLogo} className="React-logo" alt="rick logo" />
            <h1>Rick and Morty Memory Cards</h1>
            <img src={mortyLogo} className="React-logo" alt="jerry logo" />
        </header>
        )
    }
}

export default Header;