import React, { Component } from "react";
import './HeadFoot.css';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
        <header className="App-header-footer">
            <img src={logo} id="React-logo" alt="logo" />
            <h1>React Memory Cards</h1>
        </header>
        )
    }
}

export default Header;