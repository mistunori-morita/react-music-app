import React, { Component } from 'react'

export default class Track extends Component {
  render() {
    const { tracks } = this.props;
    return (
      <div>
        {
          tracks.map(track => {
            const { name, album } = track;


            return (
              <div key={id}>
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
