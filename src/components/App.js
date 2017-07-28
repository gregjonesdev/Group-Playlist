import React, { Component } from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'
import '../styles/App.css';

class App extends Component {
  constructor(props){
    super(props)


    this.refresh = this.refresh.bind(this)

  }

  refresh = function() {
   window.location.reload()

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <PlayList refresh={this.refresh}/>
          <PlayListForm refresh={this.refresh}/>
        </div>
      </div>
    );
  }
}

export default App;
