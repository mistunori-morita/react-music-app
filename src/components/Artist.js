import React from 'react'

const Artist = ({artist}) => {
  if(!artist) return null;
  const { images, name, followers, genres } = artist;
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total}</p>
      <p>{genres.join(',')}</p>
      <p><img 
      src={images[0] && images[0].url}
      alt={name}
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        objectFit: 'cover'
      }}
      /></p>
    </div>
  )
}

export default Artist
