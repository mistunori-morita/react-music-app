import React, { Component } from 'react'

export default class Search extends Component {
  state = {
    artistQuery: ''
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
    this.props.searchArtist(this.state.artistQuery);
  }


  render() {
    return (
      <div>
        <input onChange={this.uppdateArtisQuery} onKeyPress={this.handleKeyPress} placeholder="検索したいアーティストを入力してください" />
         <button onClick={this.searchArtist}>検索</button>
      </div>
    )
  }
}
