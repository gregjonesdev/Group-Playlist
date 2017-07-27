import React, { Component } from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'
import '../styles/App.css';

//const bootstrap = require('bootstrap') Error message: requires jquery

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <PlayListForm />
          <PlayList />
        </div>  
      </div>
    );
  }
}

export default App;
