import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
        songs: []
      }

  }


  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    }).catch((error) => {
      console.log("Error with fetching: ", error)
    })
  }



  render() {
      return (
        <div className="playlist">
          <button onClick={this.props.refresh}>Update</button>
          <PlayListItem songs={this.state.songs}/>
        </div>
      )
  }
}
