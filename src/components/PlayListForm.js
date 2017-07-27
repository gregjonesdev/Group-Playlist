import React, { Component } from 'react';

export default class PlayListForm extends Component {
  render() {
    return (
      <div className="playlistForm">
        <form>
          <div className="entry">
            <label>Username:</label>
            <input type="text" name="username" placeholder="Name or Username"/>
          </div>
          <div className="entry">
            <label>Artist/Band:</label>
            <input type="text" name="artist" placeholder="Artist or Band Name"/>
          </div>
          <div className="entry">
            <label>Song Title:</label>
            <input type="text" name="songTitle" placeholder="Song Title"/>
          </div>
          <div className="entry">
            <label>Notes About Song:</label>
            <textarea name="notes"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


//******************************************************************************
//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (dependin on the syntax you choose) will be comparable to this:

// addToList = (e) => {
//     e.preventDefault();
//     this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
//     let listItem = JSON.stringify(this.state);
//
//     fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
//       method: "POST",
//       body: listItem,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
//   }
//   ).then(response => {
//     console.log(response, "yay");
//
//   }).catch(err => {
//     console.log(err, "boo!");
//   });
//   this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
// }

//******************************************************************************
