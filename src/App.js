import React, { Component } from 'react';
import HeaderMain from './HeaderMain';
import Home from './Home';
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
            <Route path = "/about" component = {Home} />
            <Route path = "/projects" component = {Home} />
            <Route path = "/skills" component = {Home} />
            <Route path = "/more" component = {Home} />
            <Route path = "/resume" component = {Home} />
        </div>
      </Router>
    )
  }
}

export default App;