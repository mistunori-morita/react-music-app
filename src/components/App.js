import React, { Component } from 'react'


const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

export default class App extends Component {
  state = {
    artistQuery: '',
    artist: null,
    tracks: []
  }

  uppdateArtisQuery = (event) => {
    this.setState({
      artistQuery: event.target.value
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.searchArtist();
    }
  }

  searchArtist = () => {
    console.log('this.state', this.state);
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
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
    .catch(error => console.log('error', error))
  }

  render() {
    return (
      <div>
         <h2>Music Master</h2>
         <input onChange={this.uppdateArtisQuery} onKeyPress={this.handleKeyPress} placeholder="検索したいアーティストを入力してください" />
         <button onClick={this.searchArtist}>検索</button>
      </div>
    )
  }
}
