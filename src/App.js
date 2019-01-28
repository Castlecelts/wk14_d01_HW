import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js'
import FilmReleasesContainer from './containers/FilmReleasesContainer.js'

class App extends Component {
  render() {
    return (
      <>
      <div id="left">
      <p>Area1</p>
      </div>
      <div id="centre">
      <p>Area2</p>
      </div>
      <div id="right">
      <Title/>
      <FilmReleasesContainer/>
      </div>
      </>
    );
  }
}

export default App;
