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

  trackIcon = track => {
    if(!track.preview_url){
      return <span>N/A</span>
    }
    if(
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ){
      return <span>| |</span>
    }
     return <span>&#9654;</span>
  }

  render() {
    const { tracks } = this.props;
    return (
      <div className="track">
        {
          tracks.map(track => {
            const { id,name, album, preview_url } = track;

            return (
              <div key={id} onClick={this.previwAudio(preview_url)} className="trackCard">
                <img src={album.images[0].url} alt={name} className="trackCard-image"/>
                <p className="trackCard-title">{name}</p>
                <p className="trackCard-icon">{this.trackIcon(track)}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
