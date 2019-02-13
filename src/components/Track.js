import React, { Component } from 'react'

export default class Track extends Component {

  previwAudio = previeUrl => () => {
    const audio = new Audio(previeUrl)
    audio.play();
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
