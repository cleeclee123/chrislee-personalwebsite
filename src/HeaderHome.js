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
            <div className = 'header-div'>
                <div className = 'preview-box'>
                    <header ref = {divElement => (this.divElement = divElement)}> 
                        <h1> Welcome to my Website </h1>
                    </header>
                </div>

                <div className = 'nav'>
                    <nav className = {
                        this.state.scrolltop > this.state.height 
                        ? 'main-nav main-nav-scrolled'
                        : 'main-nav'    
                    }> 
                        
                        <a href = "/"> Home </a>
                        <a href = "/about"> About </a>

                    </nav>
                </div>

                <div className = 'main'>
                    <button> 
                        hello
                    </button>
                </div>

            </div>
        )
    }
}
export default HeaderHome;

