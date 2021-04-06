import React from 'react'

export const Description = (props) => {
  const {
    artists,
    albumUrl,
    albumTitle
  } = props
  const artistList = artists.map(({ name, externalUrls }, index) => {
    const space = ', '
    return (
      <span key={index}><a href={externalUrls.spotify} target="_blank" rel="noreferrer">{name}</a>{props.artists.length - 1 > index && space}</span>
    )
  })

  return (
    <div className="description">
      <span className="album"><a href={albumUrl} target="_blank" rel="noreferrer">{albumTitle}</a></span>
      <span className="artists">{artistList}</span>
    </div>
  )
}