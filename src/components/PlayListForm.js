import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameEntry = this.handleNameEntry.bind(this)
    this.handleArtistEntry = this.handleArtistEntry.bind(this)
    this.handleSongEntry = this.handleSongEntry.bind(this)
    this.handleNotesEntry = this.handleNotesEntry.bind(this)

    this.addToList = this.addToList.bind(this)
  }



  handleSubmit = function(event) {
    event.preventDefault()
    this.addToList(this.props.songlist)
  }
  handleNameEntry = function(event) {
    this.props.songlist.userName = event.target.value
  }
  handleArtistEntry = function(event) {
    this.props.songlist.songArtist = event.target.value
  }
  handleSongEntry = function(event) {
    this.props.songlist.songTitle = event.target.value
  }
  handleNotesEntry = function(event) {
    this.props.songlist.songNotes = event.target.value
  }
  addToList = function(info) {
    let listItem = JSON.stringify(info);
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });

  }





  render() {
    return (
      <div className="playlistForm">
        <form onSubmit={this.handleSubmit}>
          <div className="entry">
            <label>Username:</label>
            <input type="text" name="username" onChange={this.handleNameEntry} placeholder="Name or Username"/>
          </div>
          <div className="entry">
            <label>Artist/Band:</label>
            <input type="text" name="artist" onChange={this.handleArtistEntry} placeholder="Artist or Band Name"/>
          </div>
          <div className="entry">
            <label>Song Title:</label>
            <input type="text" name="songTitle" onChange={this.handleSongEntry} placeholder="Song Title"/>
          </div>
          <div className="entry">
            <label>Notes About Song:</label>
            <textarea name="notes" onChange={this.handleNotesEntry} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
