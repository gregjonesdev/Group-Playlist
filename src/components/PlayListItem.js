import React, { Component } from 'react';

export default class PlayListItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let entries = this.props.songs.map((song, index) => {
      return(
        <div key= {index} className="playlistItem">
          <ul>
            <li>User: {song.userName}</li>
            <li>Artist/Band: {song.songArtist}</li>
            <li>Title: {song.songTitle}</li>
            <li>Notes: {song.songNotes}</li>
          </ul>
        </div>
      )
    })

    return(
      <div>
        {entries}
      </div>
    )
  }
}
