import React, { Component } from 'react';
import './HeaderMain.css'
import 'react-sticky-header/styles.css';

export default class HeaderMain extends Component {
    render() {
        return (
            <div className = "headerLinks">

            <nav className = "main-nav main-nav-scrolled">

                <div className = 'header-links'>
                    <a href = "/"> Home </a>
                    <a href = "/about"> About</a>

                </div>
            </nav>
        </div>    
        )
    }
}
