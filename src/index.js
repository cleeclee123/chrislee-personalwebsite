import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Index() {
  return (
    <div className = 'Index'>

      <App/>
      
    </div>
  )
}
export default Index

const rootElement = document.getElementById('root')
ReactDOM.render(<App> </App>, rootElement)

reportWebVitals();