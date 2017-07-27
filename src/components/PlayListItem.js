import React, { Component } from 'react';

export default class PlayListItem extends Component {

  constructor(props) {
    super(props)


  }

  render() {
    let playlistEntries = ""

    if(this.props.playlist) {
      playlistEntries = this.props.playlist.map((entry, index) => {
      return (
        <div key={index} className="playlistItem">
          <ul>
            <li>User:{entry.userName}</li>
            <li>Artist/Band:{entry.songArtist}</li>
            <li>Title:{entry.songTitle}</li>
            <li>Notes:{entry.songNotes}</li>
          </ul>
        </div>

      )
    })
  }






    return(
      <div className="allEntries">
          {playlistEntries}
      </div>
    )

  }
}
