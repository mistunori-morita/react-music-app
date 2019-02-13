import React, { Component } from 'react'
export default class App extends Component {
  state = {
    artistQuery: '',
  }

  uppdateArtisQuery = (event) => {
    console.log('event', event.target.value);
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
