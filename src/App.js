import React, { Component } from 'react';
import HeaderMain from './HeaderMain';
import Home from './Home';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderMain/>
            <Route exact path = "/" component = {Home} />
            <Route path = "/about" component = {About} />
        </div>
      </Router>
    )
  }
}

export default App;