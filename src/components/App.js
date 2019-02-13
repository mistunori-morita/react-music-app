import React, { Component } from 'react'
export default class App extends Component {
  state = {
    artistQuery: '',
  }

  uppdateArtisQuery = (event) => {
    console.log('event', event.target.value);
  }


  render() {
    return (
      <div>
         <h2>Music Master</h2>
         <input onChange={this.uppdateArtisQuery} placeholder="検索したいアーティストを入力してください" />
         <button>検索</button>
      </div>
    )
  }
}
