import React, { Component } from "react";
import { FaGithub} from 'react-icons/fa';
import './HeadFoot.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="App-header-footer footer">
                <div>Created by Dan Meleras for the Odin Project ||  <a href="https://github.com/danme-l"><FaGithub className="footerLogo"/></a></div>
                <div id='attributions'>
                    <p> <a target="_blank" href="https://icons8.com/icon/udMvpkRHbzzS/rick-sanchez">Rick </a> and <a target="_blank" href="https://icons8.com/icon/hAPVXSp7TpSM/morty-smith">Morty </a> icons by <a target="_blank" href="https://icons8.com">Icons8</a> || <a target="_blank" href="https://rickandmortyapi.com/">Rick and Morty API</a></p>
                </div>
            </footer>
        )
    }
}

export default Footer;