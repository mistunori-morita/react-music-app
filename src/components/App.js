import React, { Component } from 'react'
import Artist from '../components/Artist'
import Track from '../components/Track'
import Search from '../components/Search'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

export default class App extends Component {
  state = {
    artist: null,
    tracks: []
  }

  searchArtist = artistQuery => {
    console.log('this.state', this.state);
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then( json => {
        if(json.artists.total > 0){
          const artist = json.artists.items[0];
          this.setState({artist})

          //apiのオブジェクトで入ってくるものをさらにセレクトして取得
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks}))
            .catch(error => alert(error.message))
        }
    })
    .catch(error => alert('error', error.message))
  }

  render() {
    return (
      <div>
         <h2>Music Master</h2>
         <Search searchArtist={this.searchArtist}/>
         <hr/>
         <Artist artist={this.state.artist}/>
         <Track tracks={this.state.tracks}/>
      </div>
    )
  }
}
