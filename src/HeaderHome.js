import React from 'react';
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
                    <h1 className = 'name-intro'> hello, i am chris </h1>
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
                    <a href = "/about"> <b><u>about</u></b> </a>
                    <a href = "/projects"> <b><u>projects</u></b> </a>
                    <a href = "/skills"> <b><u>skills</u></b> </a>
                    <a href = "/more"> <b><u>more</u></b> </a>
                    <a href = "/resume"> <b><u>resume</u></b> </a>

                </nav>

                <div className = 'main'>
                    About Me: 
                </div>
           
            </div>
        )
    } 
}
export default HeaderHome;

