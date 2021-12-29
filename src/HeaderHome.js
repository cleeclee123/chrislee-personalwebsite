import React from 'react';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import More from './More';
import Resume from './Resume';
import Test from './Test';
import TestMore from './TestMore';
import './HeaderHome.css';

class HeaderHome extends React.Component {
    constructor(props) {
      super(props);
      this.state = { height: 0, scrolltop: 0 };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
  
        this.setState({ height });
        window.addEventListener("scroll", this.handleScroll);
    }
    componentDidUpdate(prevProps, prevState) {
        const scrollTop2 = window.pageYOffset;
  
        if (scrollTop2 !== prevState.scrolltop) {
            this.setState({ scrolltop: scrollTop2 });
        }
    }
    handleScroll(event) {
        const scrollTop = window.scrollTo;
  
        this.setState ({ scrolltop: scrollTop });
    }

    render() {
        return (
            <div>
                <header ref = {divElement => (this.divElement = divElement)}> 
                   <div className = 'typewriter'> <h1 className = 'name-intro'> hello, i am chris </h1> </div>
                </header>

                <nav className = {
                    this.state.scrolltop > this.state.height 
                    ? 'main-nav main-nav-scrolled'
                    : 'main-nav'    
                }> 

                    <div className = 'logo-home'>
                        <img className = "logo-home-image" src = "/images/panpanwebarebears.png" alt =""/>  
                    </div>

                    <a href = "/"> <b><u>home</u></b> </a>
                    <a href = "#aboutme"> <b><u>about</u></b> </a>
                    <a href = "#projects"> <b><u>projects</u></b> </a>
                    <a href = "#skillz"> <b><u>skills</u></b> </a>
                    <a href = "#more"> <b><u>more</u></b> </a>
                    <a href = "#resume"> <b><u>resume</u></b> </a>

                </nav>

                <div className = 'main'>

                    <div className = 'aboutme-section' id = "aboutme">
                        <About> </About>
                    </div>

                    <div className = 'projects-section' id = "projects">
                        <Project> </Project>
                    </div>

                    <div className = 'skills-section' id = "skillz">
                        <Skills> </Skills>
                    </div>

                    <div className = 'more-section' id = "more">
                        <More> </More>
                    </div>

                    <div className = 'resume-section' id = "resume">
                        <Resume> </Resume>
                    </div> 

                    <div className = 'testing' id = "testing"> 
                        <Test> </Test>
                    </div>

                    <div className = 'testing-p2' id = "testing-p2">
                        <TestMore> </TestMore>
                    </div>

                   
                </div>
           
            </div>
        )
    } 
}
export default HeaderHome;

