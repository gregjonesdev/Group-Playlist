import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    return (
      <div className="playlistItem">
        {this.props.playlist.artist}
      </div>
    );
  }
}
