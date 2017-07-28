import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  constructor(props) {
    super(props)
  }

componentDidMount(){
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
    return results.json();
  }).then(data => {
    this.setState({songs: data});
  })
}


  render() {
    return (
      <div className="playlist">
        <PlayListItem/>

      </div>
    )
  }






}
