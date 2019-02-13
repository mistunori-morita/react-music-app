import React, { Component } from 'react'

export default class Track extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null
  }
  previwAudio = previeUrl => () => {
    const audio = new Audio(previeUrl)
    if(!this.state.playing){
      audio.play();
      this.setState({playing: true, audio, playingPreviewUrl: previeUrl})
    }else{
      this.state.audio.pause();
      if(this.state.playingPreviewUrl === previeUrl){
        this.setState({ playing: false})
      }else{
        audio.play();
        this.setState({ audio, playingPreviewUrl: previeUrl})
      }
    }
  }


  render() {
    const { tracks } = this.props;
    return (
      <div>
        {
          tracks.map(track => {
            const { id,name, album, preview_url } = track;

            return (
              <div key={id} onClick={this.previwAudio(preview_url)}>
                <img src={album.images[0].url} alt={name} />
                <p>{name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
