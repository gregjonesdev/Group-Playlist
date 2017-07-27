import React, { Component } from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'
import '../styles/App.css';

//const bootstrap = require('bootstrap') Error message: requires jquery

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      songs: {
        userName: "",
        songArtist: "",
        songTitle: "",
        songNotes: ""
      }
    }

    this.updateList=this.updateList.bind(this)
  }


// componentDidMount(){
//   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//        return results.json();
//      }).then(data => {
//        this.setState({songs: data});
//
//      })
// }

  updateList = function() {
    alert("hello from app.js updateList")
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <PlayList songlist={this.state.songs}/>
          <PlayListForm songlist={this.state.songs}/>
        </div>
      </div>
    );
  }
}

export default App;
