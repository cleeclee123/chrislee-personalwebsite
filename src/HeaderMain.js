import React, { Component } from 'react';
import './HeaderMain.css'
import 'react-sticky-header/styles.css';

export default class HeaderMain extends Component {
    render() {
        return (
            <div className = "headerLinks">

                <nav className = "main-nav main-nav-scrolled">

                   <div className = 'logo-home'>
                        <img className = "logo-home-image" src = "/images/panpanwebarebears.png" alt =""/>  
                    </div>

                    <div className = 'header-links'>
                        <a href = "/"> <b><u>home</u></b> </a>
                        <a href = "/about"> <b><u>about</u></b> </a>
                        <a href = "/projects"> <b><u>projects</u></b> </a>
                        <a href = "/skills"> <b><u>skills</u></b> </a>
                        <a href = "/more"> <b><u>more</u></b> </a>
                        <a href = "/resume"> <b><u>resume</u></b> </a>

                    </div>
                </nav>


            </div>    
        )
    }
}
