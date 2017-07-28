import React, { Component } from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'
import '../styles/App.css';

//const bootstrap = require('bootstrap') Error message: requires jquery

class App extends Component {

  constructor(props) {
    super(props)
    }
  



  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <PlayList update={this.updateList}/>
          <PlayListForm update={this.updateList}/>
        </div>
      </div>
    );
  }
}

export default App;
