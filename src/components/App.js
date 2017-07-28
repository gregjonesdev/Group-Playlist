import React, { Component } from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <PlayList />
          <PlayListForm />
        </div>
      </div>
    );
  }
}

export default App;
