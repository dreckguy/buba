import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubaImage from './images/buba.jpg';

import ConceptGraph from './components/concept-graph';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ms. Ella Yonai's  Project</h1>
        </header>
        <p className="App-intro">Here will be The Project of Ms. Ella Yonai</p>
        <p><img src={BubaImage} className = "buba"/></p>
        <hr/>
        <ConceptGraph/>

      </div>
    );
  }
}

export default App;
