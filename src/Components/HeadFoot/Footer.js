import React, { Component } from "react";
import { FaGithub} from 'react-icons/fa';
import './HeadFoot.css';

class Footer extends Component {
    render() {
        return (
            <footer className="App-header-footer footer">
                <div>Created by Dan Meleras for the Odin Project ||  </div>
                <a href="https://github.com/danme-l"><FaGithub className="footerLogo"/></a>
            </footer>
        )
    }
}

export default Footer;